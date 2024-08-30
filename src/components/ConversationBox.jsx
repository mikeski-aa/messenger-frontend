import { useState, useEffect, useContext } from "react";
import "../styles/conversationbox.css";
import { v4 as uuidv4 } from "uuid";
import postNewMessage from "../services/postNewMessage";

function ConversationBox(props) {
  const [newMessage, setNewMessage] = useState("");
  const [testArr, setTestArr] = useState([]);

  // assign incoming v.s my messages
  for (let x = 0; x < props.convoTest.length; x++) {
    if (props.convoTest[x].author === props.myId) {
      props.convoTest[x] = { ...props.convoTest[x], isOwner: true };
    } else {
      props.convoTest[x] = { ...props.convoTest[x], isOwner: false };
    }
  }

  const handleNewMessage = (e) => {
    setNewMessage(e.target.value);
  };

  const handleMessageSubmit = async (e) => {
    e.preventDefault();

    // call service to post the message
    const response = await postNewMessage(
      props.convoid,
      props.myId,
      props.myUname,
      newMessage
    );

    const test = [...props.messageArray];
    test.push(response);
    console.log(test);
    props.setMessageArray(test);
    setNewMessage("");

    console.log(response);
  };

  return (
    <>
      <div className="convoContainer">
        <div className="convoHistory">
          {props.convoTest.map((msg) => (
            <div
              className={msg.isOwner ? "msg isOwner" : "msg notOwner"}
              key={uuidv4()}
            >
              <div className="authorDiv">{msg.authorname}:</div>
              {msg.message}
            </div>
          ))}
        </div>
        <div className="convoInput">
          <form className="newMsgInputForm">
            <input
              type="text"
              className="newMessageInput"
              onChange={(e) => handleNewMessage(e)}
              value={newMessage}
            ></input>
            <button
              type="submit"
              className="sendButtonMsg"
              onClick={(e) => handleMessageSubmit(e)}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ConversationBox;

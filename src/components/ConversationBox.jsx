import { useState } from "react";
import "../styles/conversationbox.css";
import { v4 as uuidv4 } from "uuid";

function ConversationBox(props) {
  const [messageText, setMessageText] = useState("");

  // dummy check, this will either be done on backend or FE depends after fetching data.
  for (let x = 0; x < props.convoTest.length; x++) {
    console.log(props.convoTest[x]);
    if (props.convoTest[x].author === "Me") {
      console.log("found me");
      props.convoTest[x] = { ...props.convoTest[x], isOwner: true };
    } else {
      props.convoTest[x] = { ...props.convoTest[x], isOwner: false };
    }
  }

  console.log(props.convoTest[1]);
  console.log(props.convoTest[2]);

  return (
    <>
      <div className="convoContainer">
        <div className="convoHistory">
          {props.convoTest.map((msg) => (
            <div
              className={msg.isOwner ? "msg isOwner" : "msg notOwner"}
              key={uuidv4()}
            >
              <div className="authorDiv">{msg.author}:</div>
              {msg.message}
            </div>
          ))}
        </div>
        <div className="convoInput">
          <form className="newMsgInputForm">
            <label htmlFor="convoText"></label>
            <input type="text" className="newMessageInput"></input>
            <button type="submit" className="sendButtonMsg">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ConversationBox;

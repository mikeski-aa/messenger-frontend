import "../styles/conversationbox.css";
import { v4 as uuidv4 } from "uuid";

function ConversationBox(props) {
  return (
    <>
      <div className="convoContainer">
        <div className="convoHistory">
          {props.convoTest.map((msg) => (
            <div className="msg" key={uuidv4()}>
              {msg.message}
            </div>
          ))}
        </div>
        <div className="convoInput">
          <form>
            <label htmlFor="convoText"></label>
            <input type="text"></input>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ConversationBox;

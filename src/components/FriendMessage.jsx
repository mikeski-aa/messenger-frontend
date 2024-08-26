import "../styles/friendmessage.css";
import person from "../assets/person.svg";
import more from "../assets/moredots.svg";
import { useState } from "react";
import deleteConvo from "../services/deleteConvo";

function FriendMessage(props) {
  const [menuOpen, setMenuOpen] = useState("closed");

  const handleOpenMore = () => {
    if (menuOpen === "closed") {
      setMenuOpen("open");
    } else {
      setMenuOpen("closed");
    }
  };

  const handleFriendMainClick = () => {
    window.location.href = `/convo/${props.convoid}`;
  };

  const handleConvoDelete = async () => {
    const response = await deleteConvo(props.convoid, props.userid);

    const tempConvos = props.messages.filter(
      (item) => item.convo != props.convoid
    );

    props.setMessages(tempConvos);
    console.log(response);
    setMenuOpen("closed");
  };
  return (
    <>
      <div className="friendProfileContainer">
        <div className={"menu " + menuOpen}>
          <div className="optionFriend One" onClick={handleConvoDelete}>
            Delete conversation
          </div>
        </div>
        <div className="friendMain" onClick={handleFriendMainClick}>
          <img src={person} className={"personImg " + props.status}></img>
          <div className="friendName">{props.username}</div>
        </div>
        <div className="friendBtn">
          <button className="moreOptBtn">
            <img
              src={more}
              className="moreBtnImage"
              onClick={handleOpenMore}
            ></img>
          </button>
        </div>
      </div>
    </>
  );
}

export default FriendMessage;

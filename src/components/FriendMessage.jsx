import "../styles/friendmessage.css";
import person from "../assets/person.svg";
import more from "../assets/moredots.svg";
import { useState, useEffect } from "react";
// import deleteConvo from "../services/deleteConvo";
import { deleteConvo } from "../services/convoCalls";

function FriendMessage(props) {
  const [menuOpen, setMenuOpen] = useState("closed");

  const handleOpenMore = () => {
    if (menuOpen === "closed") {
      setMenuOpen("open");
    } else {
      setMenuOpen("closed");
    }
  };
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    if (props.imageURL === "default") {
      setImgUrl(person);
    } else {
      setImgUrl(props.imageURL);
    }
  }, []);

  const handleFriendMainClick = () => {
    window.location.href = `/convo/${props.convoid}?participants=${props.username}`;
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
          <img src={imgUrl} className={"personImg " + props.status}></img>
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

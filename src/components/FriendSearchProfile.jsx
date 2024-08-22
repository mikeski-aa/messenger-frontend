import "../styles/friendmessage.css";
import person from "../assets/person.svg";
import more from "../assets/moredots.svg";
import { useState } from "react";

function FriendSearchProfile(props) {
  const [menuOpen, setMenuOpen] = useState("closed");
  const [friendId, setFriendId] = useState(props.id);

  const handleOpenMore = () => {
    if (menuOpen === "closed") {
      setMenuOpen("open");
    } else {
      setMenuOpen("closed");
    }
  };

  const handleAddFriendClick = async () => {
    // on click call API that creates a new request
    // if pending request don't create a new one
    console.log(props.id);
  };
  return (
    <>
      <div className="friendProfileContainer">
        <div className={"menu " + menuOpen}>
          <div className="optionFriend One" onClick={handleAddFriendClick}>
            Add friend
          </div>
        </div>
        <div className="friendMain">
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

export default FriendSearchProfile;

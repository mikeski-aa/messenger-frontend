import "../styles/friendprofile.css";
import person from "../assets/person.svg";
import more from "../assets/moredots.svg";
import { useState } from "react";
import getRequestOwnerInfo from "../services/getRequestOwnerInfo";

function FriendProfile(props) {
  const [menuOpen, setMenuOpen] = useState("closed");
  const [reqOwner, setReqOwner] = useState({});

  const handleOpenMore = () => {
    if (menuOpen === "closed") {
      setMenuOpen("open");
    } else {
      setMenuOpen("closed");
    }
  };
  return (
    <>
      <div className="friendProfileContainer">
        <div className={"menu " + menuOpen}>
          <div className="optionFriend One">Accept</div>
          <div className="optionFriend Three">Decline</div>
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

export default FriendProfile;

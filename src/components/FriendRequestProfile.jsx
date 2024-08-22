import "../styles/friendprofile.css";
import person from "../assets/person.svg";
import more from "../assets/moredots.svg";
import { useEffect, useState } from "react";
import getRequestOwnerInfo from "../services/getRequestOwnerInfo";

function FriendRequestProfile(props) {
  const [menuOpen, setMenuOpen] = useState("closed");
  const [reqOwner, setReqOwner] = useState({
    status: "Pending",
    username: "pending",
  });

  const handleOpenMore = () => {
    if (menuOpen === "closed") {
      setMenuOpen("open");
    } else {
      setMenuOpen("closed");
    }
  };

  useEffect(() => {
    const stateUpdate = async () => {
      const tempOwner = await getRequestOwnerInfo(props.id);
      console.log("TEMP OWNER STRUCTURE");
      console.log(tempOwner);
      setReqOwner(tempOwner);
    };

    stateUpdate();
  }, []);
  return (
    <>
      <div className="friendProfileContainer">
        <div className={"menu " + menuOpen}>
          <div className="optionFriend One">Accept</div>
          <div className="optionFriend Three">Decline</div>
        </div>
        <div className="friendMain">
          <img src={person} className={"personImg " + reqOwner.status}></img>
          <div className="friendName">{reqOwner.username}</div>
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

export default FriendRequestProfile;

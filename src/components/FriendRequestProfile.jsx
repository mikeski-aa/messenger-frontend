import "../styles/friendprofile.css";
import person from "../assets/person.svg";
import more from "../assets/moredots.svg";
import { useContext, useEffect, useState } from "react";
import getRequestOwnerInfo from "../services/getRequestOwnerInfo";
import updateUserFriends from "../services/updateUserFriends";
import { AuthContext } from "../App";

function FriendRequestProfile(props) {
  const [menuOpen, setMenuOpen] = useState("closed");
  const [reqOwner, setReqOwner] = useState({
    status: "Pending",
    username: "pending",
  });
  const authContext = useContext(AuthContext);

  const handleOpenMore = () => {
    if (menuOpen === "closed") {
      setMenuOpen("open");
    } else {
      setMenuOpen("closed");
    }
  };

  const handleAcceptClick = async () => {
    console.log(authContext.user.id, reqOwner.id);
    const response = await updateUserFriends(
      authContext.user.id,
      reqOwner.id,
      props.reqid
    );
    console.log(response);
    window.location.href = "/friends";
    setMenuOpen("closed");
  };

  const handleDeclineClick = async () => {};

  // there has to be a better way of handling this
  // probably the models I have created are poor, because calling db for every request to get
  // owner info seems like a huge waste of time + resources.
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
          <div className="optionFriend One Accept" onClick={handleAcceptClick}>
            Accept
          </div>
          <div
            className="optionFriend Three Decline"
            onClick={handleDeclineClick}
          >
            Decline
          </div>
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

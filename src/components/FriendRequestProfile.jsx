import "../styles/friendprofile.css";
import person from "../assets/person.svg";
import more from "../assets/moredots.svg";
import { useContext, useEffect, useState } from "react";
import getRequestOwnerInfo from "../services/getRequestOwnerInfo";
import updateUserFriends from "../services/updateUserFriends";
import { AuthContext } from "../App";
import deleteRequest from "../services/deleteRequest";
import getUserData from "../services/getUserData";

function FriendRequestProfile(props) {
  const authContext = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState("closed");
  const [reqOwner, setReqOwner] = useState({
    status: "Pending",
    username: "pending",
  });
  const [imgUrl, setImgUrl] = useState("");

  // open an options tab when clicking the icon
  const handleOpenMore = () => {
    if (menuOpen === "closed") {
      setMenuOpen("open");
    } else {
      setMenuOpen("closed");
    }
  };

  // handle clicking accept on request option tab
  const handleAcceptClick = async () => {
    setMenuOpen("closed");
    const response = await updateUserFriends(
      authContext.user.id,
      reqOwner.id,
      props.reqid
    );

    const test = await getUserData(authContext.user.id);
    authContext.setRequests(test.requests);
  };

  const handleDeclineClick = async () => {
    setMenuOpen("closed");
    const response = await deleteRequest(props.reqid);
    const test = await getUserData(authContext.user.id);
    authContext.setRequests(test.requests);
    console.log(test.requests);
  };

  // there has to be a better way of handling this
  // probably the models I have created are poor, because calling db for every request to get
  // owner info seems like a huge waste of time + resources.
  useEffect(() => {
    const stateUpdate = async () => {
      const tempOwner = await getRequestOwnerInfo(props.id);
      setReqOwner(tempOwner);

      if (tempOwner.imageURL === "default") {
        setImgUrl(person);
      } else {
        setImgUrl(tempOwner.imageURL);
      }
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
          <img src={imgUrl} className={"personImg " + reqOwner.status}></img>
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

import "../styles/friendprofile.css";
import person from "../assets/person.svg";
import more from "../assets/moredots.svg";
import { useContext, useState } from "react";
import deleteFriend from "../services/deleteFriend";
import { AuthContext } from "../App";
import getUserData from "../services/getUserData";

function FriendProfile(props) {
  const [menuOpen, setMenuOpen] = useState("closed");
  const authContext = useContext(AuthContext);

  const handleOpenMore = () => {
    if (menuOpen === "closed") {
      setMenuOpen("open");
    } else {
      setMenuOpen("closed");
    }
  };

  const handleDeleteClick = async () => {
    setMenuOpen("closed");
    const response = await deleteFriend(authContext.user.id, props.id);

    const test = await getUserData(authContext.user.id);
    authContext.setFriends(test.friends);
  };

  return (
    <>
      <div className="friendProfileContainer">
        <div className={"menu " + menuOpen}>
          <div className="optionFriend One">Message</div>
          <div className="optionFriend Two" onClick={handleDeleteClick}>
            Remove friend
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

export default FriendProfile;

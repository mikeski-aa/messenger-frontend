import "../styles/friendprofile.css";
import person from "../assets/person.svg";
import more from "../assets/moredots.svg";
import { useContext, useState } from "react";
import deleteFriend from "../services/deleteFriend";
import { AuthContext } from "../App";
import getUserData from "../services/getUserData";
import postConverastion from "../services/postConversation";

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

  // deletes the friend
  const handleDeleteClick = async () => {
    setMenuOpen("closed");
    const response = await deleteFriend(authContext.user.id, props.id);

    const test = await getUserData(authContext.user.id);
    authContext.setFriends(test.friends);
  };

  // creates a new conversation
  // redirects to new conversation
  const handleMessageClick = async () => {
    setMenuOpen("closed");
    console.log(props.id);
    const response = await postConverastion([authContext.user.id, props.id]);
    console.log(response);
    console.log(response.error);
    if (typeof response.convo != "undefined") {
      console.log("Duplicate error detected" + " " + response.convo[0].id);
      // display error message to user
      return alert("Conversation already exists, redirecting");
    }

    // window.location.href = `/convo/${response.id}`;
  };

  return (
    <>
      <div className="friendProfileContainer">
        <div className={"menu " + menuOpen}>
          <div className="optionFriend One" onClick={handleMessageClick}>
            Message
          </div>
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

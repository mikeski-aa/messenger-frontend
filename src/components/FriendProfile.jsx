import "../styles/friendprofile.css";
import person from "../assets/person.svg";
import more from "../assets/moredots.svg";
import { useContext, useState, useEffect } from "react";
import deleteFriend from "../services/deleteFriend";
import { AuthContext } from "../App";
import getUserData from "../services/getUserData";
import postConverastion from "../services/postConversation";

function FriendProfile(props) {
  const [menuOpen, setMenuOpen] = useState("closed");
  const authContext = useContext(AuthContext);
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    if (props.imageURL === "default") {
      setImgUrl(person);
    } else {
      setImgUrl(props.imageURL);
    }
  }, []);

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
    // issue where the conversation is not being created, backend issue with endpoint;
    // instead of a new converastion it is only checking if two users match participants!
    const response = await postConverastion([authContext.user.id, props.id]);
    console.log(response);
    console.log(response.error);
    if (typeof response.convo != "undefined") {
      console.log(
        "Conversation already exists, redirecting" + " " + response.convo[0].id
      );
      // display error message to user
      return (window.location.href = `/convo/${response.convo[0].id}?participants=${props.username}`);
    }

    window.location.href = `/convo/${response.id}?participants=${props.username}`;
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

export default FriendProfile;

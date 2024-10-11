import "../styles/friendmessage.css";
import person from "../assets/person.svg";
import more from "../assets/moredots.svg";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../App";
// import postFriendRequest from "../services/postFriendRequest";
import { postFriendRequest } from "../services/requestCalls";

function FriendSearchProfile(props) {
  const [menuOpen, setMenuOpen] = useState("closed");
  const [friendId, setFriendId] = useState(props.id);
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    if (props.imageURL === "default") {
      setImgUrl(person);
    } else {
      setImgUrl(props.imageURL);
    }
  }, []);
  const authContext = useContext(AuthContext);

  const handleOpenMore = () => {
    if (menuOpen === "closed") {
      setMenuOpen("open");
    } else {
      setMenuOpen("closed");
    }
  };

  const handleAddFriendClick = async () => {
    setMenuOpen("closed");
    // on click call API that creates a new request
    // if pending request don't create a new one
    console.log(props.id);
    console.log(authContext.user.id);
    const response = await postFriendRequest(props.id, authContext.user.id);
    console.log(response);
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

export default FriendSearchProfile;

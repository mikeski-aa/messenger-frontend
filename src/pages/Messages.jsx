import "../styles/messages.css";
import { AuthContext } from "../App";
import { useContext, useState } from "react";
import Layout from "../components/Layout";
import FriendMessage from "../components/FriendMessage";
import { v4 as uuidv4 } from "uuid";
import { Outlet } from "react-router-dom";

function Messages() {
  const authContext = useContext(AuthContext);
  const [testShow, setTestShow] = useState("hide");

  const handleShowClick = () => {
    if (testShow === "hide") {
      setTestShow("show");
    } else {
      setTestShow("hide");
    }
  };

  // this should return a list of people with currently active conversations
  // map them
  // option to delete conversation
  return (
    <>
      <div className="messagesContainer">
        <h1>Conversations</h1>
        <div className="messageContainer">
          {authContext.tempFriends.map((friend) => (
            <FriendMessage
              username={friend.username}
              status={friend.status}
              key={uuidv4()}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Messages;

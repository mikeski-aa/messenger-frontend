import "../styles/messages.css";
import { AuthContext } from "../App";
import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import FriendMessage from "../components/FriendMessage";
import { v4 as uuidv4 } from "uuid";
import { Outlet } from "react-router-dom";
import getUserDms from "../services/getUserDms";

function Messages() {
  const authContext = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [testShow, setTestShow] = useState("hide");

  const handleShowClick = () => {
    if (testShow === "hide") {
      setTestShow("show");
    } else {
      setTestShow("hide");
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      if (
        typeof authContext.user.id === "undefined" ||
        authContext.user.id === null
      ) {
        return;
      } else {
        const dms = await getUserDms(authContext.user.id);
        console.log(dms);
        setMessages(dms);
      }
    };
    fetchMessages();
  }, [authContext.user]);

  // this should return a list of people with currently active conversations
  // map them
  // option to delete conversation
  return (
    <>
      <div className="messagesContainer">
        <h1>Conversations</h1>
        <div className="messageContainer">
          {messages.map((friend) => (
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

import "../styles/messages.css";
import { AuthContext } from "../App";
import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import FriendMessage from "../components/FriendMessage";
import { v4 as uuidv4 } from "uuid";
import { Outlet } from "react-router-dom";
// import getUserDms from "../services/deprecated_user_calls/getUserDms";
import { getUserDms } from "../services/userCalls";
import Loading from "../components/Loading";
import NoActive from "../components/NoActive";

function Messages() {
  const authContext = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [testShow, setTestShow] = useState("hide");
  const [loadingStatus, setLoadingStatus] = useState("");
  const [noActive, setNoActive] = useState("hide");

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
        setLoadingStatus("hide");
        console.log("messages: ");
        console.log(dms);
        setMessages(dms);
        if (dms.length === 0) {
          setNoActive("show");
        }
      }
    };
    fetchMessages();
  }, [authContext.user]);

  const checkMsgs = () => {
    return <p>You have no active conversations</p>;
  };

  // this should return a list of people with currently active conversations
  // map them
  // option to delete conversation
  return (
    <>
      <div className="messagesContainer">
        <h1>Conversations</h1>
        <div className="messageContainer">
          <Loading loadingstatus={loadingStatus} />
          <NoActive
            text="You have no active conversations... Yet!"
            activeshow={noActive}
          />
          {messages.map((friend) => (
            <FriendMessage
              username={friend.username}
              status={friend.status}
              convoid={friend.convo}
              userid={friend.user}
              imageURL={friend.imageURL}
              messages={messages}
              setMessages={setMessages}
              key={uuidv4()}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Messages;

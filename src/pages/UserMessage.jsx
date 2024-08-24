import "../styles/usermessage.css";
import Layout from "../components/Layout";
import { useLocation, useParams } from "react-router-dom";
import ConversationBox from "../components/ConversationBox";
import { AuthContext } from "../App";
import { useContext, useEffect, useState } from "react";
import getConvo from "../services/getConvo";

function UserMessage() {
  const [messageArray, setMessageArray] = useState([]);
  const [convoId, setConvoId] = useState();
  const userId = useParams();

  const convoTest = [
    {
      message: "Test One",
      author: "Author one",
    },
    {
      message: "Test Two",
      author: "Author one",
    },
    {
      message: "Reply",
      author: "Me",
    },
    {
      message: "Test three",
      author: "Author one",
    },
    {
      message:
        "Super long message test, Super long message test, Super long message test, Super long message test, Super long message test, Super long message test, Super long message test, Super long message test, Super long message test, Super long message test, ",
      author: "Me",
    },
    {
      message:
        "Super long message test 2, Super long message test 2, Super long message test 2, Super long message test 2, Super long message test 2, Super long message test 2, Super long message test 2, Super long message test 2, Super long message test 2, Super long message test 2, Super long message test 2, ",
      author: "Author one",
    },
  ];

  console.log(userId);

  const authContext = useContext(AuthContext);
  const { id } = useParams();

  useEffect(() => {
    const convo = async () => {
      if (
        typeof authContext.user.id === "undefined" ||
        authContext.user.id === null
      ) {
        return null;
      }

      const response = await getConvo(id, authContext.user.id);

      // permission error, show error
      if (typeof response.error != "undefined") {
        return (window.location.href = "/messages");
      } else {
        setConvoId(response.id);
        setMessageArray(response.message);
      }
    };
    convo();
  }, [authContext.user]);
  return (
    <>
      <div className="mesageBox">
        <h1>Your conversation with test</h1>
        <ConversationBox
          convoTest={messageArray}
          myId={authContext.user.id}
          myUname={authContext.user.username}
          convoid={convoId}
        />
      </div>
    </>
  );
}

export default UserMessage;

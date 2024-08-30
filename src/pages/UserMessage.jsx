import "../styles/usermessage.css";
import Layout from "../components/Layout";
import { useLocation, useParams } from "react-router-dom";
import ConversationBox from "../components/ConversationBox";
import { AuthContext } from "../App";
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import getConvo from "../services/getConvo";

function UserMessage() {
  const [messageArray, setMessageArray] = useState([]);
  const [convoId, setConvoId] = useState();
  const [fetchUpdate, setFetchUpdate] = useState(0);
  const authContext = useContext(AuthContext);
  const { id } = useParams();
  const [participants, setParticipants] = useState(["Null"]);
  let tempHolder = [];

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const participants = urlParams.get("participants");
    console.log(participants);

    tempHolder = participants.split(",");
    setParticipants(tempHolder);
  }, []);

  useEffect(() => {
    const convo = async () => {
      if (
        typeof authContext.user.id === "undefined" ||
        authContext.user.id === null
      ) {
        return null;
      }

      const response = await getConvo(id, authContext.user.id);
      console.log(response);
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
      <div className="messageBox">
        <h1>Your conversation with:</h1>
        <div className="participantNamesDiv">
          <div className="participantsUserMessage">
            {participants.map((person) => (
              <div key={uuidv4()} className="listOfMembers">
                {person} &nbsp;
              </div>
            ))}
          </div>
        </div>
        <ConversationBox
          convoTest={messageArray}
          myId={authContext.user.id}
          myUname={authContext.user.username}
          convoid={id}
          fetchUpdate={fetchUpdate}
          setFetchUpdate={setFetchUpdate}
          messageArray={messageArray}
          setMessageArray={setMessageArray}
        />
      </div>
    </>
  );
}

export default UserMessage;

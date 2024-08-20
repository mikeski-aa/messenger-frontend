import "../styles/usermessage.css";
import Layout from "../components/Layout";
import { useLocation, useParams } from "react-router-dom";
import ConversationBox from "../components/ConversationBox";

function UserMessage() {
  const location = useLocation();

  console.log("location");
  console.log("test");
  let userId = useParams();

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
  return (
    <>
      <div className="mesageBox">
        <h1>Your conversation with test</h1>
        <ConversationBox convoTest={convoTest} />
      </div>
    </>
  );
}

export default UserMessage;

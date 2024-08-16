import "../styles/usermessage.css";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import ConversationBox from "../components/ConversationBox";

function UserMessage() {
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
  ];

  console.log(userId);
  return (
    <>
      <Layout>
        <div className="mesageBox">
          <h1>Your conversation with test</h1>
          <ConversationBox convoTest={convoTest} />
        </div>
      </Layout>
    </>
  );
}

export default UserMessage;

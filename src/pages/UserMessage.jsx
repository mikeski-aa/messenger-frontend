import "../styles/usermessage.css";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";

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
        <div className="mesageBox"></div>
      </Layout>
    </>
  );
}

export default UserMessage;

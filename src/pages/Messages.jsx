import "../styles/messages.css";
import { AuthContext } from "../App";
import { useContext, useState } from "react";
import Layout from "../components/Layout";

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

  return (
    <>
      <Layout>
        <div className="messagesContainer">
          <h1>Messages</h1>
          {authContext.tempMessages.map((message) => (
            <>
              <div className={"tempDiv " + testShow} onClick={handleShowClick}>
                <div>From: {message.author}</div>
                <div className={"msgTest " + testShow}>
                  {message.message.map((test) => (
                    <div>{test}</div>
                  ))}
                </div>
              </div>
            </>
          ))}
        </div>
      </Layout>
    </>
  );
}

export default Messages;

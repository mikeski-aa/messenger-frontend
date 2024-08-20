import "../styles/layout.css";
import NavButton from "./NavButton";
import PersonProfile from "./PersonProfile";
import { useState } from "react";
import rightArrow from "../assets/rightArrow.svg";
import mainLogo from "../assets/DM_ME_LOGO.png";
import validateUser from "../services/authValidate";

function Layout({ children }) {
  const [navVis, setNavVis] = useState("show");

  const test = async () => {
    const xd = await validateUser();

    if (typeof xd === "undefined") {
      return (window.location.href = "/login");
    } else {
      // set state
    }
  };

  test();

  const handleShowClick = () => {
    if (navVis === "show") {
      setNavVis("hide");
    } else {
      setNavVis("show");
    }
  };

  const handleFriendsClick = () => {
    window.location.href = "/friends";
  };

  const handleMessagesClick = () => {
    console.log("test");
    window.location.href = "/messages";
  };

  return (
    <>
      <div className="backgroundTest"></div>
      <div className="layoutContainer">
        <div className={"navBar " + navVis}>
          <div className={"showBtnContainer " + navVis}></div>
          <div className={"navOpts " + navVis}>
            <PersonProfile visible={navVis} username="ExampleNameLong" />
            <NavButton
              buttonName="friendsBtn"
              buttonText="Friends"
              click={handleFriendsClick}
            ></NavButton>
            <NavButton
              buttonName="messagesBtn"
              buttonText="Messages"
              click={handleMessagesClick}
            ></NavButton>
            <NavButton buttonName="Groups" buttonText="Groups"></NavButton>
            <NavButton buttonName="logout" buttonText="Logout"></NavButton>
          </div>
        </div>
        <div className="mainCont">
          <div className={"logoActionHeader " + navVis}>
            <button
              className={"toggleShow " + navVis}
              onClick={handleShowClick}
            >
              <img
                src={rightArrow}
                width={"25px"}
                className={"rightArrowImg " + navVis}
              ></img>
            </button>
            <img className={"mainLogo " + navVis} src={mainLogo}></img>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;

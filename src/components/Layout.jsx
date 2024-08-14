import "../styles/layout.css";
import NavButton from "./NavButton";
import PersonProfile from "./PersonProfile";
import { useState } from "react";
import rightArrow from "../assets/rightArrow.svg";

function Layout({ children }) {
  const [navVis, setNavVis] = useState("show");

  const handleShowClick = () => {
    if (navVis === "show") {
      setNavVis("hide");
    } else {
      setNavVis("show");
    }
  };

  return (
    <>
      <div className="layoutContainer">
        <div className={"navBar " + navVis}>
          <PersonProfile />
          <NavButton
            buttonName="friendsBtn"
            buttonText="Friends"
            hideStatus={navVis}
          ></NavButton>
          <NavButton
            buttonName="messagesBtn"
            buttonText="Messages"
            hideStatus={navVis}
          ></NavButton>
          <NavButton
            buttonName="Groups"
            buttonText="Groups"
            hideStatus={navVis}
          ></NavButton>
          <button
            className="toggleShow"
            onClick={handleShowClick}
            hideStatus={navVis}
          >
            <img
              src={rightArrow}
              width={"25px"}
              className={"rightArrowImg " + navVis}
            ></img>
          </button>
        </div>
        {children}
      </div>
    </>
  );
}

export default Layout;

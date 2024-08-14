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
          <div className={"showBtnContainer " + navVis}>
            <button
              className={"toggleShow " + navVis}
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
          <div className={"navOpts " + navVis}>
            <PersonProfile visible={navVis} />
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
          </div>
        </div>
        <div className="mainCont">{children}</div>
      </div>
    </>
  );
}

export default Layout;

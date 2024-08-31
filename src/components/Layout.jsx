import "../styles/layout.css";
import NavButton from "./NavButton";
import PersonProfile from "./PersonProfile";
import { useState, useContext } from "react";
import rightArrow from "../assets/rightArrow.svg";
import mainLogo from "../assets/DM_ME_LOGO.png";
import { AuthContext } from "../App";
import { Outlet } from "react-router-dom";
import updateUserStatus from "../services/updateUserStatus";

function Layout({ children }) {
  const authContext = useContext(AuthContext);
  const [navVis, setNavVis] = useState("show");

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
    window.location.href = "/messages";
  };

  const handleLogoutClick = async () => {
    await updateUserStatus("offline");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const handleGroupsClick = () => {
    window.location.href = "/groups";
  };

  return (
    <>
      <div className="backgroundTest"></div>
      <div className="layoutContainer">
        <div className={"navBar " + navVis}>
          <div className={"showBtnContainer " + navVis}></div>
          <div className={"navOpts " + navVis}>
            <PersonProfile
              visible={navVis}
              username={authContext.user.username}
              status={authContext.user.status}
              imageURL={authContext.user.imageURL}
            />
            <NavButton
              buttonName="friendsBtn"
              buttonText="Friends"
              click={handleFriendsClick}
            ></NavButton>
            <NavButton
              buttonName="messagesBtn"
              buttonText="Conversations"
              click={handleMessagesClick}
            ></NavButton>
            <NavButton
              buttonName="Groups"
              buttonText="Groups"
              click={handleGroupsClick}
            ></NavButton>
            <NavButton
              buttonName="logout"
              buttonText="Logout"
              click={handleLogoutClick}
            ></NavButton>
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

          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;

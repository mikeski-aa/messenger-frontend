import "../styles/layout.css";
import NavButton from "./NavButton";
import PersonProfile from "./PersonProfile";
import { useState, useContext } from "react";
import rightArrow from "../assets/rightArrow.svg";
import mainLogo from "../assets/DM_ME_LOGO.png";
import { AuthContext } from "../App";
import {
  Outlet,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
// import updateUserStatus from "../services/deprecated_user_calls/updateUserStatus";
import { updateUserStatus } from "../services/userCalls";
import person from "../assets/person.svg";
import groupicon from "../assets/groupicon.svg";
import envelope from "../assets/envelope.svg";
import logout from "../assets/logout.svg";
import useRedirectValidate from "../hooks/useRedirectValidate";

function Layout({ children }) {
  const authContext = useContext(AuthContext);
  const [navVis, setNavVis] = useState("show");
  const navigate = useNavigate();

  useRedirectValidate(authContext.isAuth);

  const handleShowClick = () => {
    if (navVis === "show") {
      setNavVis("hide");
    } else {
      setNavVis("show");
    }
  };

  const handleFriendsClick = () => {
    return navigate("/friends");
    window.location.href = "/friends";
  };

  const handleMessagesClick = () => {
    return navigate("/messages");
    window.location.href = "/messages";
  };

  const handleLogoutClick = async () => {
    await updateUserStatus("offline");
    localStorage.removeItem("token");
    return navigate("/login");
    window.location.href = "/login";
  };

  const handleGroupsClick = () => {
    return navigate("/groups");
    window.location.href = "/groups";
  };

  // this is probably a terrible workaround, but it works
  // if (
  //   window.location.href === "https://dmmeapp.netlify.app/" ||
  //   window.location.href === "dmmeapp.netlify.app/" ||
  //   window.location.href === "http://localhost:5173/"
  // ) {
  //   return navigate("/friends");
  // }

  if (authContext.isAuth === false || authContext.isAuth === "") {
    return <div>Loading...</div>;
  }

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
              btnImg={person}
              click={handleFriendsClick}
            ></NavButton>
            <NavButton
              buttonName="messagesBtn"
              buttonText="Conversations"
              btnImg={envelope}
              click={handleMessagesClick}
            ></NavButton>
            <NavButton
              buttonName="Groups"
              buttonText="Groups"
              btnImg={groupicon}
              click={handleGroupsClick}
            ></NavButton>
            <NavButton
              buttonName="logout"
              buttonText="Logout"
              btnImg={logout}
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

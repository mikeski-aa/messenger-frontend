import "../styles/layout.css";
import NavButton from "./NavButton";
import PersonProfile from "./PersonProfile";

function Layout({ children }) {
  return (
    <>
      <div className="layoutContainer">
        <div className="navBar">
          <PersonProfile />
          <NavButton buttonName="friendsBtn" buttonText="Friends"></NavButton>
          <NavButton buttonName="messagesBtn" buttonText="Messages"></NavButton>
          <NavButton buttonName="Groups" buttonText="Groups"></NavButton>
        </div>
        {children}
      </div>
    </>
  );
}

export default Layout;

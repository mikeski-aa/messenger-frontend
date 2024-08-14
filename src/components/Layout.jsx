import "../styles/layout.css";

function Layout({ children }) {
  return (
    <>
      <div className="layoutContainer">
        <div className="navBar">
          <ul>
            <li>Friends</li>
            <li>Messages</li>
            <li>Groups</li>
          </ul>
        </div>
        {children}
      </div>
    </>
  );
}

export default Layout;

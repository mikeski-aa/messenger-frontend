import { AuthContext } from "../App";
import { useContext } from "react";

function Home() {
  const authContext = useContext(AuthContext);
  if (authContext.isAuth === false) {
    window.location.href = "/login";
  }

  return (
    <>
      <div className="homePage">
        <h3>Homepage</h3>
      </div>
    </>
  );
}

export default Home;

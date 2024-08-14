import { AuthContext } from "../App";
import { useContext } from "react";
import Layout from "../components/Layout";
import "../styles/home.css";

function Home() {
  const authContext = useContext(AuthContext);
  if (authContext.isAuth === false) {
    window.location.href = "/login";
  }

  return (
    <>
      <Layout>
        <div className="homePage">
          <h3>Homepage</h3>
        </div>
      </Layout>
    </>
  );
}

export default Home;

import { AuthContext } from "../App";
import { useContext } from "react";
import Layout from "../components/Layout";
import "../styles/home.css";
import { Outlet } from "react-router-dom";

function Home() {
  const authContext = useContext(AuthContext);
  if (authContext.isAuth === false) {
    console.log(authContext.isAuth);
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

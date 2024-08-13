import { useContext } from "react";
import { AuthContext } from "../App";

function Login() {
  const authContext = useContext(AuthContext);

  if (authContext.isAuth === false) {
    console.log("Context false");
  }

  return (
    <>
      <div className="loginContent">
        <h3>Login page</h3>
      </div>
    </>
  );
}

export default Login;

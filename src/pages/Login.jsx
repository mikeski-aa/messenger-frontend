import { useContext } from "react";
import { AuthContext } from "../App";
import dmLogo from "../assets/DM_ME_LOGO.png";

function Login() {
  const authContext = useContext(AuthContext);

  if (authContext.isAuth === false) {
    console.log("Context false");
  }

  return (
    <>
      <div className="loginContent">
        <div className="loginLogoHeader">
          <img src={dmLogo}></img>
        </div>
        <div className="loginMain">
          <form>
            <div className="emailLogin">
              <label htmlFor="email" className="labelEmail">
                EMAIL
              </label>
              <div className="emailInputDiv">
                <input
                  type="email"
                  name="email"
                  className="emailInputBox"
                  placeholder="youremail@website.com"
                />
              </div>
            </div>
            <div className="passwordLogin">
              <label htmlFor="password" className="labelPassword">
                PASSWORD
              </label>
              <div className="passwordInputDiv">
                <input type="password" name="password" />
              </div>
            </div>
            <div className="buttonContainer">
              <button className="submitForm">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

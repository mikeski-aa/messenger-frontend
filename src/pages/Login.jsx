import { useContext, useState } from "react";
import { AuthContext } from "../App";
import dmLogo from "../assets/DM_ME_LOGO.png";
import background from "../assets/testBck.png";
import postLogin from "../services/postLogin";
import "../styles/forms.css";
// import postUser from "../services/deprecated_user_calls/postUser";
import { postUser } from "../services/userCalls";
// import updateUserStatus from "../services/deprecated_user_calls/updateUserStatus";
import { updateUserStatus } from "../services/userCalls";

function Login() {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [generalError, setGeneralError] = useState("hide");
  const [generalErrorMsg, setGeneralErrorMsg] = useState("");

  // if (authContext.isAuth === false) {
  //   console.log("Context false");
  // } else {
  //   console.log("Context true");
  // }

  // need to add some more styling to this page, in particular background - transparent, with overlay.

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    window.location.href = "/";
  };

  // handling email input

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  // handling password input
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    console.log("login clicked");
    e.preventDefault();

    const response = await postLogin(email, password);
    console.log(response);
    if (typeof response === "undefined") {
      setGeneralError("show");
      return setGeneralErrorMsg("Make sure email and password is correct!");
    } else {
      setGeneralError("hide");
      console.log("response logged in handle login: ");
      console.log(response);
      window.location.href = "/";
      await updateUserStatus("online");
    }
  };

  return (
    <>
      <div className="backgroundElement"></div>
      <div className="pageContainer">
        <div className="loginContent">
          <div className="loginLogoHeader">
            <img src={dmLogo} className="logoImg"></img>
          </div>
          <div className="loginMain">
            <div className="welcomeHeadingDiv">
              <h1 className="welcomeHeading">Welcome back</h1>
            </div>
            <form className="loginForm" onSubmit={(e) => handleSubmit(e)}>
              <div className="emailLogin">
                <label htmlFor="email" className="labelEmail">
                  EMAIL
                </label>
                <div className="emailInputDiv">
                  <input
                    type="email"
                    name="email"
                    className="emailInputBox"
                    placeholder="hello@dm_me.com"
                    data-testid="add-email"
                    onChange={(e) => {
                      handleEmailInput(e);
                    }}
                    required
                  />
                </div>
              </div>
              <div className="passwordLogin">
                <label htmlFor="password" className="labelPassword">
                  PASSWORD
                </label>
                <div className="passwordInputDiv">
                  <input
                    type="password"
                    name="password"
                    className="passwordInputBox"
                    aria-label="Password"
                    data-testid="add-password"
                    onChange={(e) => handlePasswordInput(e)}
                    required
                  />
                </div>
              </div>
              <div className={"registerErrorContainer " + generalError}>
                <div className="errorText">{generalErrorMsg}</div>
              </div>
              <hr></hr>
              <div className="buttonContainer">
                <button
                  className="submitButton"
                  type="submit"
                  aria-label="Login"
                  data-testid="submit-login"
                  onClick={(e) => handleLogin(e)}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="createNew">
            Don't have an account?
            <a href="/register" className="formLink">
              Register!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

import { useContext, useState } from "react";
import { AuthContext } from "../App";
import dmLogo from "../assets/DM_ME_LOGO.png";
import background from "../assets/testBck.png";
import "../styles/forms.css";

function Login() {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (authContext.isAuth === false) {
    console.log("Context false");
  } else {
    console.log("Context true");
  }

  // need to add some more styling to this page, in particular background - transparent, with overlay.

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  // handling email input

  const handleEmailInput = (e) => {
    console.log(email);
    setEmail(e.target.value);
  };
  // handling password input
  const handlePasswordInput = (e) => {
    console.log(password);
    setPassword(e.target.value);
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
              <hr></hr>
              <div className="buttonContainer">
                <button
                  className="submitButton"
                  type="submit"
                  aria-label="Login"
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

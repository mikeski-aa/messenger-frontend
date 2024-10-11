import { useContext, useState } from "react";
import { AuthContext } from "../App";
import dmLogo from "../assets/DM_ME_LOGO.png";
import "../styles/forms.css";
// import postUser from "../services/deprecated_user_calls/postUser";
import { postUser } from "../services/userCalls";
import { Link } from "react-router-dom";

// TO DO: CONVERT NAMES TO ALL CAPS

function Register() {
  const authContext = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("hide");
  const [generalError, setGeneralError] = useState("hide");
  const [generalErrorMsg, setGeneralErrorMsg] = useState("");

  // handlers for typing / input
  const handleUserInput = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordConfirmInput = (e) => {
    setConfirmPassword(e.target.value);
  };

  // temp function, once fully working this will redirect if someone is logged in currently backwads for context testing
  if (authContext.isAuth === false) {
    console.log("Context false");
  }

  // need to add some more styling to this page, in particular background - transparent, with overlay.

  const handleSubmit = async (e) => {
    e.preventDefault();

    // check passwords are matching
    // TO DO: show error under passwords, and highliht password fields
    if (password != confirmPassword) {
      setPasswordError("show");
      setGeneralError("show");
      return setGeneralErrorMsg("Passwords need to match!");
    } else {
      setPasswordError("hide");
      setGeneralError("hide");
    }

    // TO DO: create funtion to call the API.
    const result = await postUser(username, email, password, confirmPassword);
    console.log("logging on register page: ");

    if (typeof result.response === "undefined") {
      // no response, therefore error
      setGeneralError("show");
      return setGeneralErrorMsg(
        "Please make sure the email and username is correct and unique"
      );
    } else {
      setGeneralError("hide");
    }

    console.log("form submitted");
    // redirect user to login page
    window.location.href = "/login";
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
              <h1 className="welcomeHeading">Register account</h1>
            </div>
            <form className="registerForm" onSubmit={(e) => handleSubmit(e)}>
              <div className="usernameRegister">
                <label htmlFor="username" className="labelUsername">
                  USERNAME
                </label>
                <div className="usernameInputDiv">
                  <input
                    type="text"
                    name="username"
                    className="usernameInputBox"
                    id="unameIbox"
                    minLength={1}
                    maxLength={15}
                    onChange={(e) => handleUserInput(e)}
                    required
                  />
                </div>
              </div>
              <div className="emailRegister">
                <label htmlFor="email" className="labelEmail">
                  EMAIL
                </label>
                <div className="emailInputDiv">
                  <input
                    type="email"
                    name="email"
                    className="emailInputBox"
                    placeholder="hello@dm_me.com"
                    onChange={(e) => handleEmailInput(e)}
                    required
                  />
                </div>
              </div>
              <div className={"passwordRegister " + passwordError}>
                <label htmlFor="password" className="labelPassword">
                  PASSWORD
                </label>
                <div className="passwordInputDiv">
                  <input
                    type="password"
                    name="password"
                    className="passwordInputBox"
                    onChange={(e) => handlePasswordInput(e)}
                    minLength={3}
                    required
                  />
                </div>
              </div>
              <div className={"passwordRegisterConfirm " + passwordError}>
                <label htmlFor="password" className="labelPassword">
                  CONFIRM PASSWORD
                </label>
                <div className="passwordInputDiv">
                  <input
                    type="password"
                    name="password"
                    className="passwordInputBox"
                    onChange={(e) => handlePasswordConfirmInput(e)}
                    minLength={3}
                    required
                  />
                </div>
              </div>
              <div className={"registerErrorContainer " + generalError}>
                <div className="errorText">{generalErrorMsg}</div>
              </div>
              <hr></hr>
              <div className="buttonContainer">
                <button className="submitButton" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="createNew">
            Already have an account? <Link to="/login">Login!</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;

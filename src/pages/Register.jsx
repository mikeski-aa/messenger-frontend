import { useContext, useState } from "react";
import { AuthContext } from "../App";
import dmLogo from "../assets/DM_ME_LOGO.png";
import "../styles/forms.css";

function Register() {
  const authContext = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // check passwords are matching
    if (password != confirmPassword) {
      return setErrors("Passwords are not matching!");
    }

    console.log("form submitted");
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
                    minLength={1}
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
              <div className="passwordRegister">
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
              <div className="passwordRegisterConfirm">
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
              <hr></hr>
              <div className="buttonContainer">
                <button className="submitButton" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="createNew">
            Already have an account?{" "}
            <a href="/login" className="formLink">
              Login!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;

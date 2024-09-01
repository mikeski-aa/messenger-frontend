import "../styles/userprofile.css";
import updateUserStatus from "../services/updateUserStatus";
import { useEffect, useState } from "react";
import updateUserName from "../services/updateUserName";
import postUserImg from "../services/postUserImg";
import SavingModal from "../components/SavingModal";

function UserProfile(props) {
  const [status, setStatus] = useState("");
  const [username, setUsername] = useState("");
  const [showError, setShowError] = useState("hide");
  const [errorMessage, setErrorMessage] = useState("");
  const [fileState, setFileState] = useState();
  const [modalShow, setModalShow] = useState("hide");

  const handleSaveStatus = async (e) => {
    e.preventDefault();
    setModalShow("show");
    await updateUserStatus(status);
    setModalShow("hide");
  };

  const handleStatusSelect = (e) => {
    setStatus(e.target.value);
    props.setUser({ ...props.user, status: e.target.value });
  };

  const handleNameInput = (e) => {
    setUsername(e.target.value);
  };

  const handleNameChange = async (e) => {
    setModalShow("show");
    e.preventDefault();
    const response = await updateUserName(username);

    if (typeof response.error != "undefined") {
      console.log("error detected, show error to user");
      setShowError("show");
      setErrorMessage(
        "Error updating username, make sure the username is unique"
      );
      setModalShow("hide");
      return;
    }
    setShowError("hide");
    setModalShow("hide");
    props.setUser({ ...props.user, username: username });
  };

  const handleImageChange = (e) => {
    console.log(e.target.files[0]);
    setFileState(e.target.files[0]);
  };

  const handleImageSave = async (e) => {
    e.preventDefault();
    setModalShow("show");
    const response = await postUserImg(fileState);
    setModalShow("hide");
  };

  return (
    <>
      <SavingModal modalshow={modalShow} />
      <div className="myProfileontainer">
        <div className="myProfileHeader">
          <h1>Welcome, {props.username}</h1>
        </div>
        <div className="mainProfileCont">
          <div className="changeStatusForm">
            <form>
              <div className="status">
                <label htmlFor="changeStatus">Change status</label>
                <div className="btnInput">
                  <select
                    name="changeStatus"
                    className="statusSelectBox"
                    onChange={(e) => handleStatusSelect(e)}
                    value={props.status}
                  >
                    <option value="online">Online</option>
                    <option value="busy">Busy</option>
                    <option value="away">Away</option>
                    <option value="offline">Appear Offline</option>
                  </select>
                  <button
                    className="saveBtnProfile"
                    type="submit"
                    onClick={(e) => handleSaveStatus(e)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
          <hr />
          <div className="changePicForm">
            <form>
              <div className="picFile">
                <label htmlFor="uploadPic">Change profile picture</label>
                <div className="btnInput">
                  <input
                    type="file"
                    name="uploadPic"
                    className="inputBoxFile"
                    onChange={(e) => handleImageChange(e)}
                  />
                  <button
                    className="saveBtnProfile"
                    type="submit"
                    onClick={(e) => handleImageSave(e)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
          <hr />
          <div className="changeDisplayName">
            <form>
              <div className="nameChange">
                <label htmlFor="changeName">Change display name</label>
                <div className="btnInput">
                  <input
                    type="text"
                    defaultValue={props.username}
                    className="inputBoxName"
                    minLength={1}
                    maxLength={15}
                    onChange={(e) => handleNameInput(e)}
                  ></input>
                  <button
                    className="saveBtnProfile"
                    type="submit"
                    onClick={(e) => handleNameChange(e)}
                  >
                    Save
                  </button>
                </div>
              </div>
              <div className={"errorNameChange " + showError}>
                {errorMessage}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;

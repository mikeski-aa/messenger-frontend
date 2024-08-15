import "../styles/userprofile.css";
import Layout from "../components/Layout";

function UserProfile(props) {
  return (
    <>
      <Layout>
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
                    <select name="changeStatus" className="statusSelectBox">
                      <option value="online">Online</option>
                      <option value="busy">Busy</option>
                      <option value="away">Away</option>
                      <option value="aoffline">Appear Offline</option>
                    </select>
                    <button type="submit">Save</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="changePicForm">
              <form>
                <div className="picFile">
                  <label htmlFor="uploadPic">Change profile picture</label>
                  <div className="btnInput">
                    <input
                      type="file"
                      name="uploadPic"
                      className="inputBoxFile"
                    />
                    <button type="submit">Save</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="changeDisplayName">
              <form>
                <div className="nameChange">
                  <label htmlFor="changeName">Change display name</label>
                  <div className="btnInput">
                    <input
                      type="text"
                      defaultValue={props.username}
                      className="inputBoxName"
                    ></input>
                    <button type="submit">Save</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default UserProfile;

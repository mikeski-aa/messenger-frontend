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
                  <select name="changeStatus">
                    <option value="online">Online</option>
                    <option value="busy">Busy</option>
                    <option value="away">Away</option>
                    <option value="aoffline">Appear Offline</option>
                  </select>
                  <button type="submit">Save</button>
                </div>
              </form>
            </div>
            <div className="changePicForm">
              <form>
                <div className="picFile">
                  <label htmlFor="uploadPic">Change profile picture</label>
                  <input type="file" name="uploadPic" />
                  <button type="submit">Save</button>
                </div>
              </form>
            </div>
            <div className="changeDisplayName">
              <form>
                <div className="nameChange">
                  <label htmlFor="changeName">Change dispaly name</label>
                  <input type="text" defaultValue={props.username}></input>
                  <button type="submit">Save</button>
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

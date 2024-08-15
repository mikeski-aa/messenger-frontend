import Layout from "../components/Layout";
import "../styles/friends.css";

function Friends() {
  return (
    <>
      <Layout>
        <div className="friendsMain">
          <h1>Friends</h1>
          <div className="searchFriend">
            <form className="searchFriendForm">
              <label htmlFor="searchFriend">Add a new friend</label>
              <div className="inputButton">
                <input
                  name="searchFriend"
                  type="text"
                  placeholder="Your friend's username"
                ></input>
                <button type="submit">Search</button>
              </div>
            </form>
            <ul>
              <li>Friend...</li>
              <li>Friend...</li>
              <li>Friend...</li>
              <li>Friend...</li>
              <li>Friend...</li>
              <li>Friend...</li>
              <li>Friend...</li>
              <li>Friend...</li>
              <li>Friend...</li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Friends;

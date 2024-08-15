import Layout from "../components/Layout";
import "../styles/friends.css";
import { AuthContext } from "../App";
import { useContext } from "react";
import FriendProfile from "../components/FriendProfile";

function Friends() {
  const authContext = useContext(AuthContext);

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
            {authContext.tempFriends.map((friend) => (
              <FriendProfile
                username={friend.username}
                status={friend.status}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Friends;

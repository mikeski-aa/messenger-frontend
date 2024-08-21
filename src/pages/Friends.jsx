import Layout from "../components/Layout";
import "../styles/friends.css";
import { AuthContext } from "../App";
import { useContext, useState } from "react";
import FriendProfile from "../components/FriendProfile";
import { v4 as uuidv4 } from "uuid";

function Friends() {
  const [inputFriend, setInputFriend] = useState("");
  const [userArray, setUserArray] = useState([]);
  const authContext = useContext(AuthContext);

  const handleInputType = (e) => {
    setInputFriend(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
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
                onChange={(e) => handleInputType(e)}
              ></input>
              <button
                type="submit"
                onClick={(e) => {
                  handleSearchClick(e);
                }}
              >
                Search
              </button>
            </div>
          </form>
          <div className="testUsers">
            {userArray.map((user) => (
              <>
                <div>Test</div>
              </>
            ))}
          </div>
          {authContext.tempFriends.map((friend) => (
            <FriendProfile
              username={friend.username}
              status={friend.status}
              key={uuidv4()}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Friends;

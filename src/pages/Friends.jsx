import Layout from "../components/Layout";
import "../styles/friends.css";
import { AuthContext } from "../App";
import { useContext, useEffect, useState } from "react";
import FriendProfile from "../components/FriendProfile";
import { v4 as uuidv4 } from "uuid";
import getUsernames from "../services/getUsernames";
import FriendSearchProfile from "../components/FriendSearchProfile";
import FriendRequestProfile from "../components/FriendRequestProfile";

function Friends() {
  const [inputFriend, setInputFriend] = useState("");
  const [userArray, setUserArray] = useState([]);
  const [friendError, setFriendError] = useState("hide");
  const [friendErrorText, setFriendErrorText] = useState("");
  const [pendingReq, setPendingReq] = useState("hide");
  const authContext = useContext(AuthContext);

  const handleInputType = (e) => {
    setInputFriend(e.target.value);
  };

  // on click call DB to get users that include name being searched
  // if no items returned inform user no match
  // otherwise map to list
  const handleSearchClick = async (e) => {
    e.preventDefault();

    if (inputFriend.length === 0) {
      return;
    }

    const users = await getUsernames(inputFriend, authContext.user.id);
    console.log(typeof users);
    if (typeof users === "undefined") {
      console.log("print error");
    } else if (users.length === 0) {
      setFriendError("show");
      setFriendErrorText("No users found");
    } else {
      setFriendError("hide");
      setUserArray(users);
    }
  };

  useEffect(() => {
    if (authContext.requests.length > 0) {
      setPendingReq("show");
    }
  }, [authContext.requests]);

  return (
    <>
      <div className="friendsMain">
        <h1>Friends</h1>
        <div className="searchFriend">
          <form className="searchFriendForm">
            <label htmlFor="searchFriend">Add a new friend</label>
            <div className="inputButton">
              <input
                className="searchFriendInputBox"
                name="searchFriend"
                type="text"
                placeholder="Your friend's username"
                minLength={1}
                maxLength={15}
                onChange={(e) => handleInputType(e)}
              ></input>
              <button
                className="searchFriendSubmitBtn"
                type="submit"
                onClick={(e) => {
                  handleSearchClick(e);
                }}
              >
                Search
              </button>
            </div>
            <div className={"friendErrorBox " + friendError}>
              {friendErrorText}
            </div>
          </form>
          <div className="searchResultDiv">
            {userArray.map((user) => (
              <FriendSearchProfile
                username={user.username}
                status={user.status}
                id={user.id}
                key={user.id}
              />
            ))}
          </div>
          <hr></hr>
          <div className={"pendingRequests " + pendingReq}>
            <h4>Pending requests only show if there are pending reqs</h4>
            {authContext.requests.map((request) => (
              <div key={request.id}>
                <FriendRequestProfile id={request.ownerId} />
              </div>
            ))}
            <hr></hr>
          </div>

          <div className="friendsDiv">
            {authContext.friends.map((friend) => (
              <FriendProfile
                username={friend.username}
                status={friend.status}
                key={uuidv4()}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Friends;

import "../styles/friends.css";
import { AuthContext } from "../App";
import { useContext, useEffect, useState } from "react";
import FriendProfile from "../components/FriendProfile";
import getUsernames from "../services/getUsernames";
import FriendSearchProfile from "../components/FriendSearchProfile";
import FriendRequestProfile from "../components/FriendRequestProfile";
import getUserData from "../services/getUserData";
import Loading from "../components/Loading";

function Friends() {
  const authContext = useContext(AuthContext);
  const [inputFriend, setInputFriend] = useState("");
  const [userArray, setUserArray] = useState([]);
  const [friendError, setFriendError] = useState("hide");
  const [friendErrorText, setFriendErrorText] = useState("");
  const [pendingReq, setPendingReq] = useState("hide");
  const [tempFriends, setTempFriends] = useState([]);
  const [tempReqs, setTempReqs] = useState([]);
  const [friendShow, setFriendShow] = useState("hide");
  const [loadingstatus, setLoadingStatus] = useState("");
  const [loadingSearch, setLoadingSearch] = useState("hide");

  // set visibility of requests coming in
  useEffect(() => {
    if (tempReqs.length > 0) {
      setPendingReq("show");
    } else {
      setPendingReq("hide");
    }
  }, [tempReqs]);

  // set friend list visibility depending on people in friendlist
  useEffect(() => {
    if (tempFriends.length > 0) {
      setFriendShow("show");
    } else {
      setFriendShow("hide");
    }
  }, [tempFriends]);

  // call function to get user data instead of getting it globally
  // I hate this solution. It causes me to create duplicate states because im not handling state management correctly.
  // Setting state on App.js level might have been a mistake.
  // This causes me to call getUserData multiple times, including during accepting, declining and removing a friend
  useEffect(() => {
    const getFriends = async () => {
      const response = await getUserData(authContext.user.id);
      setTempFriends(response.friends);
      setTempReqs(response.requests);
      setLoadingStatus("hide");
    };

    if (authContext.user.id === null) {
      console.log("null id");
      return;
    }

    getFriends();
  }, [authContext.requests, authContext.friends]);

  const handleInputType = (e) => {
    setInputFriend(e.target.value.toUpperCase());
  };

  // on click call DB to get users that include name being searched
  // if no items returned inform user no match
  // otherwise map to list
  const handleSearchClick = async (e) => {
    e.preventDefault();
    setLoadingSearch("show");
    if (inputFriend.length === 0) {
      setLoadingSearch("hide");
      return;
    }

    const users = await getUsernames(inputFriend, authContext.user.id);
    setLoadingSearch("hide");
    if (typeof users === "undefined") {
      setFriendError("show");
      setFriendErrorText("Error finding the user");
    } else if (users.length === 0) {
      setFriendError("show");
      setFriendErrorText("No users found");
    } else {
      setFriendError("hide");
      setUserArray(users);
    }
  };

  const checkFriends = () => {
    if (tempFriends.length === 0) {
      return <p>No friends currently added!</p>;
    }
  };

  return (
    <>
      <div className="friendsMain">
        <h1>Friends</h1>
        <div className="searchFriend">
          <form className="searchFriendForm">
            <label htmlFor="searchFriend" className="searchFriendLabel">
              Add a new friend
            </label>
            <div className="inputButton">
              <input
                className="searchFriendInputBox"
                name="searchFriend"
                type="text"
                placeholder="Friend username"
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
            <Loading loadingstatus={loadingSearch} />
            {userArray.map((user) => (
              <FriendSearchProfile
                username={user.username}
                status={user.status}
                imageURL={user.imageURL}
                id={user.id}
                key={user.id}
              />
            ))}
          </div>
          <hr></hr>
          <div className={"pendingRequestsDiv " + pendingReq}>
            <h4 className="inReqTitle">Incoming friend requests: </h4>
            {tempReqs.map((request) => (
              <div key={request.id}>
                <FriendRequestProfile
                  id={request.ownerId}
                  reqid={request.id}
                  imageURL={request.imageURL}
                />
              </div>
            ))}
            <hr></hr>
          </div>
          <Loading loadingstatus={loadingstatus} />
          <div className={"friendsDiv " + friendShow}>
            <h4 className="inReqTitle">Friends: </h4>

            {tempFriends.map((friend) => (
              <FriendProfile
                username={friend.username}
                status={friend.status}
                id={friend.id}
                key={friend.id}
                imageURL={friend.imageURL}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Friends;

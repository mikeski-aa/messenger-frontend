import Layout from "../components/Layout";
import "../styles/friends.css";
import { AuthContext } from "../App";
import { useContext, useEffect, useState } from "react";
import FriendProfile from "../components/FriendProfile";
import { v4 as uuidv4 } from "uuid";
import getUsernames from "../services/getUsernames";
import FriendSearchProfile from "../components/FriendSearchProfile";
import FriendRequestProfile from "../components/FriendRequestProfile";
import getUserData from "../services/getUserData";

function Friends() {
  const authContext = useContext(AuthContext);
  const [inputFriend, setInputFriend] = useState("");
  const [userArray, setUserArray] = useState([]);
  const [friendError, setFriendError] = useState("hide");
  const [friendErrorText, setFriendErrorText] = useState("");
  const [pendingReq, setPendingReq] = useState("hide");
  const [tempFriends, setTempFriends] = useState([]);
  const [tempReqs, setTempReqs] = useState([]);
  const [tempStatus, setTempStatus] = useState(0);

  console.log(authContext.requests);

  const handleInputType = (e) => {
    setInputFriend(e.target.value);
  };

  // useEffect(() => {
  //   setTempReqs(authContext.requests);
  // }, [authContext.requests]);

  // on click call DB to get users that include name being searched
  // if no items returned inform user no match
  // otherwise map to list
  const handleSearchClick = async (e) => {
    e.preventDefault();

    if (inputFriend.length === 0) {
      return;
    }

    const users = await getUsernames(inputFriend, authContext.user.id);
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

  // useEffect(() => {
  //   const test = async () => {
  //     console.log("HELLO??");
  //     console.log(authContext.user.id);
  //     const data = await getUserData(authContext.user.id);
  //     console.log(data);
  //     setTempFriends(data.friends);
  //     setTempReqs(data.requests);
  //     console.log("data loaded");
  //   };

  //   test();
  // }, []);

  // call function to get user data instead of getting it globally
  useEffect(() => {
    const getFriends = async () => {
      const response = await getUserData(authContext.user.id);
      console.log("get user data from Friends");
      console.log(response.requests);
      setTempFriends(response.friends);
      setTempReqs(response.requests);
      console.log(response);
    };

    getFriends();
  }, [authContext.user]);

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
          <div className={"pendingRequestsDiv " + pendingReq}>
            <h4 className="inReqTitle">Incoming friend requests: </h4>
            {authContext.requests.map((request) => (
              <div key={request.id}>
                <FriendRequestProfile
                  id={request.ownerId}
                  reqid={request.id}
                  tempStatus={tempStatus}
                  setTempStatus={setTempStatus}
                />
              </div>
            ))}
            <hr></hr>
          </div>

          <div className="friendsDiv">
            <h4 className="inReqTitle">Friends: </h4>
            {authContext.friends.map((friend) => (
              <FriendProfile
                username={friend.username}
                status={friend.status}
                id={friend.id}
                key={friend.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Friends;

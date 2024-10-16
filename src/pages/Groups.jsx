import "../styles/groups.css";
import { AuthContext } from "../App";
import { useContext, useEffect, useState } from "react";
import FriendGroupAdd from "../components/FriendGroupAdd";
import FriendGroupCurrent from "../components/FriendGroupCurrent";
import { v4 as uuidv4 } from "uuid";
// import postNewGroup from "../services/postNewGroup";
import { postNewGroup } from "../services/groupCalls";
import GroupFriends from "../components/GroupFriends";
// import getUserGroups from "../services/getUserGroups";
import { getUserGroups } from "../services/groupCalls";
import Loading from "../components/Loading";
import NoActive from "../components/NoActive";

function Groups() {
  const authContext = useContext(AuthContext);
  const [tempGroupFriends, setTempGroupFriends] = useState([]);
  const [friendContCopy, setFriendContCopy] = useState([]);
  const [holderVis, setHolderVis] = useState("hide");
  const [inputName, setInputName] = useState("");
  const [errorState, setErrorState] = useState("hide");
  const [errorText, setErrorText] = useState("TEMP ERROR TEXT");
  const [groups, setGroups] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState("show");
  const [activeShow, setActiveShow] = useState("hide");

  let tempGroupVis = "show";
  let copyFriendVis = "show";

  if (tempGroupFriends.length === 0) {
    tempGroupVis = "hide";
  } else {
    tempGroupVis = "show";
  }

  if (friendContCopy.length === 0) {
    copyFriendVis = "hide";
  } else {
    copyFriendVis = "show";
  }

  useEffect(() => {
    setFriendContCopy(authContext.friends);
  }, [authContext.friends]);

  const handleCreateGroupClick = () => {
    console.log(groups);
    if (holderVis === "show") {
      setHolderVis("hide");
    } else {
      setHolderVis("show");
    }
  };

  const handleInputChange = (e) => {
    setInputName(e.target.value);
  };

  const handleSubmitGroup = async () => {
    let users = [authContext.user.id];
    // validate inputs to make sure enough members are added and that name has been entered.
    if (inputName.length < 1) {
      setErrorText("Input name must be at least one character long");
      setErrorState("show");
      return;
    }

    if (tempGroupFriends.length < 2) {
      setErrorText("A group must have at least two friends added!");
      setErrorState("show");
      return;
    }

    setErrorText("");
    setErrorState("hide");

    // call service here to create a new group chat!
    // get array of users to be added to new group chat
    // get group name
    for (let x = 0; x < tempGroupFriends.length; x++) {
      users.push(tempGroupFriends[x].id);
    }
    const response = await postNewGroup(users, inputName);
    console.log(response);
    if (typeof response.error != "undefined") {
      // create an error instead of an alert
      alert("group already exists");
    }
    setGroups([...groups, response]);
    setHolderVis("hide");
    setInputName("");

    setActiveShow("hide");
  };

  useEffect(() => {
    const fetchGroups = async () => {
      if (
        typeof authContext.user.id === "undefined" ||
        authContext.user.id === null
      ) {
        return;
      } else {
        const groups = await getUserGroups(authContext.user.id);
        setGroups(groups);
        setLoadingStatus("hide");
        if (groups.length == 0) {
          setActiveShow("show");
        }
      }
    };
    fetchGroups();
  }, [authContext.user, groups]);

  return (
    <>
      <div className="groupContainer">
        <h1>Groups</h1>
        <div className="groupCont">
          <div className="createGroupDiv">
            <button className="createGroupBtn" onClick={handleCreateGroupClick}>
              Create group
            </button>
            <div className={"newGroupHolder " + holderVis}>
              <div className="inputContainer">
                <label htmlFor="inputGroupName" className="inputLabelClass">
                  Enter group name
                </label>
                <input
                  className="newGroupNameInput"
                  name="inputGroupName"
                  placeholder="Your group name"
                  minLength={1}
                  maxLength={15}
                  onChange={(e) => handleInputChange(e)}
                ></input>
              </div>
              <div className={"tempGroupFriends " + tempGroupVis}>
                <h3>Friends added to group:</h3>
                <div className="tempFriendsContainer">
                  {tempGroupFriends.map((friend) => (
                    <FriendGroupCurrent
                      username={friend.username}
                      status={friend.status}
                      id={friend.id}
                      tempFriends={tempGroupFriends}
                      setTempGroupFriends={setTempGroupFriends}
                      setFriendContCopy={setFriendContCopy}
                      friendContCopy={friendContCopy}
                      data={friend}
                      key={uuidv4()}
                    />
                  ))}
                </div>
              </div>
              <div className={"groupFriendsAdd " + copyFriendVis}>
                <h3>Add friend to group</h3>
                <div className="groupFriendsContainer">
                  {friendContCopy.map((friend) => (
                    <FriendGroupAdd
                      username={friend.username}
                      status={friend.status}
                      id={friend.id}
                      tempFriends={tempGroupFriends}
                      imageURL={friend.imageURL}
                      setTempGroupFriends={setTempGroupFriends}
                      setFriendContCopy={setFriendContCopy}
                      friendContCopy={friendContCopy}
                      data={friend}
                      key={uuidv4()}
                    />
                  ))}
                </div>
              </div>
              <div className={"groupsErrBox " + errorState}>{errorText}</div>
              <button className="confirmGroupBtn" onClick={handleSubmitGroup}>
                Confirm group create
              </button>
            </div>
            <hr />
          </div>
          <Loading loadingstatus={loadingStatus} />
          <NoActive
            text="You have no active groups... Yet!"
            activeshow={activeShow}
          />
          <div className="currentGroups">
            <div className="allGroupsContainer">
              {groups.map((convo) => (
                <GroupFriends
                  title={convo.groupname}
                  members={convo.usernames}
                  participants={convo.participants}
                  key={convo.id}
                  userid={authContext.user.id}
                  convoid={convo.id}
                  groups={groups}
                  setGroups={setGroups}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Groups;

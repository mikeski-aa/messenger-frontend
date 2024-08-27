import "../styles/groups.css";
import { AuthContext } from "../App";
import { useContext, useEffect, useState } from "react";
import FriendGroupAdd from "../components/FriendGroupAdd";
import { v4 as uuidv4 } from "uuid";

function Groups() {
  const authContext = useContext(AuthContext);
  const [tempGroupFriends, setTempGroupFriends] = useState([]);

  const handleCreateGroupClick = () => {};

  return (
    <>
      <div className="groupContainer">
        <h1>Groups</h1>
        <div className="mainCont">
          <div className="createGroupDiv">
            <button className="createGroupBtn" onClick={handleCreateGroupClick}>
              Create group
            </button>
            <div className="tempGroupFriends">
              <h3>Friends added to group:</h3>
              <div className="tempFriendsContainer"></div>
            </div>
            <div className="groupFriendsAdd">
              <h3>Add friend to group</h3>
              <div className="groupFriendsContainer">
                {authContext.friends.map((friend) => (
                  <FriendGroupAdd
                    username={friend.username}
                    status={friend.status}
                    id={friend.id}
                    key={uuidv4()}
                  />
                ))}
              </div>
            </div>
            <button className="confirmGroupBtn">Confirm group create</button>
          </div>
          <div className="currentGroups">GROUPS GO HERE</div>
        </div>
      </div>
    </>
  );
}

export default Groups;

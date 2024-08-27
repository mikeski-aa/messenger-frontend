import "../styles/groups.css";
import { AuthContext } from "../App";
import { useContext, useEffect, useState } from "react";

function Groups() {
  const authContext = useContext(AuthContext);

  const handleCreateGroupClick = () => {};

  return (
    <>
      <div className="groupContainer">
        <h1>Groups</h1>
        <div className="mainCont">
          <div className="createGroundDiv">
            <button className="createGroupBtn" onClick={handleCreateGroupClick}>
              Create group
            </button>
            <div className="groupFriendsContainer"></div>
          </div>
          <div className="currentGroups">GROUPS GO HERE</div>
        </div>
      </div>
    </>
  );
}

export default Groups;

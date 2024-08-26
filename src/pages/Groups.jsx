import "../styles/groups.css";
import { AuthContext } from "../App";
import { useContext, useEffect, useState } from "react";

function Groups() {
  const authContext = useContext(AuthContext);

  return (
    <>
      <div className="groupContainer">
        <h1>Groups</h1>
        <div className="mainCont">Create group</div>
      </div>
    </>
  );
}

export default Groups;

import "../styles/friendgroupcurrent.css";
import person from "../assets/person.svg";
import minusCircle from "../assets/minusCircle.svg.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../App";

function FriendGroupCurrent(props) {
  const authContext = useContext(AuthContext);

  const handleMinusClick = () => {
    const tempHolder = [...props.tempFriends];
    const filtered = tempHolder.filter((friend) => friend != props.data);
    console.log(filtered);
    props.setTempGroupFriends(filtered);
    props.setFriendContCopy([...props.friendContCopy, props.data]);
  };

  return (
    <>
      <div className="friendProfileContainer">
        <div className="friendMain">
          <img src={person} className={"personImg " + props.status}></img>
          <div className="friendName">{props.username}</div>
        </div>
        <div className="friendBtn">
          <button className="moreOptBtn">
            <img
              src={minusCircle}
              className="minusCircleSvg"
              onClick={handleMinusClick}
            ></img>
          </button>
        </div>
      </div>
    </>
  );
}

export default FriendGroupCurrent;

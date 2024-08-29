import "../styles/groupfriends.css";
import groupicon from "../assets/groupicon.svg";
import binicon from "../assets/binicon.svg";

function GroupFriends(props) {
  const handleBinClick = () => {};

  return (
    <div className="individualGroupContainer">
      <div className="iconTitle">
        <img src={groupicon} className="groupIconImage"></img>
        <div className="groupTitle">{props.title}</div>
        <div className="listMembers">{props.members}</div>
      </div>
      <div className="friendBtn">
        <button className="moreOptBtn">
          <img
            src={binicon}
            className="moreBtnImage"
            onClick={handleBinClick}
          ></img>
        </button>
      </div>
    </div>
  );
}

export default GroupFriends;

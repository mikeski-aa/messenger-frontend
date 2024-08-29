import "../styles/groupfriends.css";
import groupicon from "../assets/groupicon.svg";
import binicon from "../assets/binicon.svg";

function GroupFriends(props) {
  const handleBinClick = () => {};

  const handleOpenClick = () => {
    window.location.href = `/convo/${props.convoid}`;
  };

  return (
    <div className="individualGroupContainer">
      <div className="iconTitle" onClick={handleOpenClick}>
        <img src={groupicon} className="groupIconImage"></img>
        <div className="groupTitle">{props.title}</div>
        <div className="listMembers">
          Group members:
          {props.members.map((member) => (
            <div className="memberName">|{member}|</div>
          ))}
        </div>
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

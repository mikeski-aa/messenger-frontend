import "../styles/groupfriends.css";
import groupicon from "../assets/groupicon.svg";
import binicon from "../assets/binicon.svg";

function GroupFriends(props) {
  const handleBinClick = () => {
    const test = confirm("Are you sure you want to delete this chat?");
    if (test) {
      // delete the group
    }
  };

  const handleOpenClick = () => {
    window.location.href = `/convo/${props.convoid}`;
  };

  return (
    <div className="individualGroupContainer">
      <div className="iconTitle" onClick={handleOpenClick}>
        <img src={groupicon} className="groupIconImage"></img>
        <div className="groupTitle">{props.title}</div>
        <div className="listMembers">Members: {props.members.length}</div>
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

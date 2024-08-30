import "../styles/groupfriends.css";
import groupicon from "../assets/groupicon.svg";
import binicon from "../assets/binicon.svg";
import deleteConvo from "../services/deleteConvo";

function GroupFriends(props) {
  const handleBinClick = async () => {
    const test = confirm("Are you sure you want to delete this chat?");
    if (test) {
      // delete the group
      const response = await deleteConvo(props.convoid, props.userid);
      const temp = [...props.groups];
      const filtered = temp.filter((item) => item.id != props.convoid);
      props.setGroups(filtered);
      console.log(response);
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
        <div className="listMembers">People: {props.participants.length}</div>
      </div>
      <div className="friendBtn">
        <button className="moreOptBtn">
          <img src={binicon} className="binBtn" onClick={handleBinClick}></img>
        </button>
      </div>
    </div>
  );
}

export default GroupFriends;

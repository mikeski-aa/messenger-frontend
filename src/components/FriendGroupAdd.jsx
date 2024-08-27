import "../styles/friendgroupadd.css";
import person from "../assets/person.svg";
import addCircle from "../assets/addCircle.svg.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../App";

function FriendGroupAdd(props) {
  const [menuOpen, setMenuOpen] = useState("closed");
  const authContext = useContext(AuthContext);

  const handleOpenMore = () => {
    if (menuOpen === "closed") {
      setMenuOpen("open");
    } else {
      setMenuOpen("closed");
    }
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
              src={addCircle}
              className="addCircleSvg"
              onClick={handleOpenMore}
            ></img>
          </button>
        </div>
      </div>
    </>
  );
}

export default FriendGroupAdd;

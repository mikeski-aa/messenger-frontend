import "../styles/friendgroupadd.css";
import person from "../assets/person.svg";
import addCircle from "../assets/addCircle.svg.svg";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../App";

function FriendGroupAdd(props) {
  const [menuOpen, setMenuOpen] = useState("closed");
  const [addVis, setAddVis] = useState("show");
  const [imgUrl, setImgUrl] = useState("");

  const authContext = useContext(AuthContext);

  const handleAddClick = () => {
    props.setTempGroupFriends([...props.tempFriends, props.data]);
    const temp = [...props.friendContCopy];
    const filtered = temp.filter((friend) => friend != props.data);
    props.setFriendContCopy(filtered);
  };

  useEffect(() => {
    if (props.imageURL === "default") {
      setImgUrl(person);
    } else {
      setImgUrl(props.imageURL);
    }
  }, []);

  return (
    <>
      <div className={"friendProfileContainer"}>
        <div className="friendMain">
          <img src={imgUrl} className={"personImg " + props.status}></img>
          <div className="friendName">{props.username}</div>
        </div>
        <div className="friendBtn">
          <button className="moreOptBtn">
            <img
              src={addCircle}
              className="addCircleSvg"
              onClick={handleAddClick}
            ></img>
          </button>
        </div>
      </div>
    </>
  );
}

export default FriendGroupAdd;

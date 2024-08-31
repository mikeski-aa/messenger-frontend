import { useEffect, useState } from "react";
import person from "../assets/person.svg";
import "../styles/personprofile.css";
import { AuthContext } from "../App";

function PersonProfile(props) {
  const [imgUrl, setImgUrl] = useState("");

  const handleOpenProfile = () => {
    window.location.href = "/profile";
  };

  useEffect(() => {
    if (props.imageURL === "default") {
      setImgUrl(person);
    } else {
      setImgUrl(props.imageURL);
    }
  }, []);

  console.log(props.status);
  return (
    <>
      <div
        className={"personProfileContainer " + props.visible}
        onClick={handleOpenProfile}
      >
        <div className="personProfilePic">
          <img className={"profilePicImg " + props.status} src={imgUrl} />
        </div>
        <div className="personName">{props.username}</div>
      </div>
    </>
  );
}

export default PersonProfile;

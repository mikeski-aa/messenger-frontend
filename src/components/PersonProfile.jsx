import person from "../assets/person.svg";
import "../styles/personprofile.css";

function PersonProfile(props) {
  const tempHandler = () => {
    window.location.href = "/profile";
  };
  return (
    <>
      <div
        className={"personProfileContainer " + props.visible}
        onClick={tempHandler}
      >
        <div className="personProfilePic">
          <img className="profilePicImg" src={person} />
        </div>
        <div className="personName">{props.username}</div>
      </div>
    </>
  );
}

export default PersonProfile;

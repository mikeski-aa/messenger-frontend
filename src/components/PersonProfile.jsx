import person from "../assets/person.svg";
import "../styles/personprofile.css";

function PersonProfile(props) {
  return (
    <>
      <div className={"personProfileContainer " + props.visible}>
        <div className="personProfilePic">
          <img className="profilePicImg" src={person} />
        </div>
        <div className="personName">ExampleNameLong</div>
      </div>
    </>
  );
}

export default PersonProfile;

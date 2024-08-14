import person from "../assets/person.svg";
import "../styles/personprofile.css";

function PersonProfile() {
  return (
    <>
      <div className="personProfileContainer">
        <div className="personProfilePic">
          <img className="profilePicImg" src={person} />
        </div>
        <div className="personName">ExampleNameLong</div>
      </div>
    </>
  );
}

export default PersonProfile;

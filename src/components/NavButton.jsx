import "../styles/navbutton.css";

function NavButton(props) {
  return (
    <>
      <div className={"buttonContainer "} onClick={props.click}>
        <button className={"navButton " + props.buttonName}>
          {props.buttonText}
        </button>
      </div>
    </>
  );
}

export default NavButton;

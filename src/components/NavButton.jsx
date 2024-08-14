import "../styles/navbutton.css";

function NavButton(props) {
  return (
    <>
      <div className={"buttonContainer "}>
        <button
          className={"navButton " + props.hideStatus + " " + props.buttonName}
        >
          {props.buttonText}
        </button>
      </div>
    </>
  );
}

export default NavButton;

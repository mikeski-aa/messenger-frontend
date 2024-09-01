import "../styles/navbutton.css";

function NavButton(props) {
  return (
    <>
      <div className={"buttonContainer "} onClick={props.click}>
        <button className={"navButton " + props.buttonName}>
          <img className="navIcons" src={props.btnImg}></img>
          {props.buttonText}
        </button>
      </div>
    </>
  );
}

export default NavButton;
 
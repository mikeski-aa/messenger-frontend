import "../styles/noactive.css";

function NoActive(props) {
  return (
    <>
      <div className={"noActiveBox " + props.activeshow}>
        <h5>{props.text}</h5>
      </div>
    </>
  );
}

export default NoActive;

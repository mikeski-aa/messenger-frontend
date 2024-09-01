import "../styles/loading.css";
import loading from "../assets/loading.svg";

function Loading(props) {
  return (
    <>
      <div className={"loadingDiv " + props.loadingstatus}>
        Loading <img src={loading} className="loadingPic"></img>
      </div>
    </>
  );
}

export default Loading;

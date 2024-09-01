import "../styles/savingmodal.css";
import loading from "../assets/loading.svg";

function SavingModal(props) {
  return (
    <>
      <div className={"modal " + props.modalshow}>
        <div className="modalContent">
          Saving... <img className="loadingLoop" src={loading}></img>
        </div>
      </div>
    </>
  );
}

export default SavingModal;

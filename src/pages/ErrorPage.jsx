import "../styles/errorElement.css";

function ErrorPage() {
  return (
    <>
      <div className="backgroundElement"></div>
      <div className="errorContainer">
        <div className="errorBox">
          <div className="errorHeading">
            <h1>Something went wrong!</h1>
          </div>
          <div className="errorBody">
            Whoops! Something wen't wrong{" "}
            <a href="/" className="backHome">
              Click here to go back home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;

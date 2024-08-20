function ProtectedRoute({ loggedIn, children }) {
  if (loggedIn === false) {
    console.log("test");
    window.location.href = "/login";
  }
  console.log("children");
  return <>{children}</>;
}

export default ProtectedRoute;

function ProtectedRoute({ loggedIn, children }) {
  if (loggedIn === false) {
    window.location.href = "/login";
  }
  return <>{children}</>;
}

export default ProtectedRoute;

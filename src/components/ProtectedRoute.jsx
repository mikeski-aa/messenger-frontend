function ProtectedRoute({ user, children }) {
  if (user === false) {
    console.log("test");
    window.location.href = "/login";
  }
  console.log("children");
  return children;
}

export default ProtectedRoute;

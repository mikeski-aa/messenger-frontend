import { StrictMode, useState, createContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";

const AuthContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "spinach", element: <Spinach /> },
      { path: "popeye", element: <Popeye /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function Main() {
  const [authState, setAuthState] = useState(false);
  return (
    <>
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <RouterProvider router={router}></RouterProvider>
      </AuthContext.Provider>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);

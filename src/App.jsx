import { createContext, useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ErrorElement from "./pages/ErrorPage";

export const AuthContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorElement />,
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

function App() {
  const [count, setCount] = useState(0);
  const [isAuth, setIsAuth] = useState(true);

  return (
    <>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <RouterProvider router={router}></RouterProvider>
      </AuthContext.Provider>
    </>
  );
}

export default App;

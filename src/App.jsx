import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

export const AuthContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  const [count, setCount] = useState(0);
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <div>Test</div>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <RouterProvider router={router}></RouterProvider>
      </AuthContext.Provider>
    </>
  );
}

export default App;

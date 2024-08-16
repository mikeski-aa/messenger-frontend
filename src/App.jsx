import { createContext, useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import Friends from "./pages/Friends";
import UserProfile from "./pages/UserProfile";
import Messages from "./pages/Messages";
import UserMessage from "./pages/UserMessage";

export const AuthContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/friends",
    element: <Friends />,
  },
  {
    path: "/profile",
    element: <UserProfile username="ExampleNameLong" />,
  },
  {
    path: "/messages",
    element: <Messages />,
  },
  {
    path: "/messages/:id",
    element: <UserMessage />,
  },
]);

function App() {
  // dummy friendlist state
  const friends = [
    {
      username: "LongFriendNameX",
      profilePic: "default",
      status: "online",
    },
    {
      username: "xXxFriendxXx",
      profilePic: "default",
      status: "busy",
    },
    {
      username: "DS",
      profilePic: "default",
      status: "offline",
    },
    {
      username: "Jupp",
      profilePic: "default",
      status: "away",
    },
  ];
  const messages = [
    {
      author: "xXxFriendxXx",
      message: ["First test message", "Second test message!"],
    },
  ];
  const [count, setCount] = useState(0);
  const [isAuth, setIsAuth] = useState(true);
  const [tempFriends, setTempFriends] = useState(friends);
  const [tempMessages, setTempMessages] = useState(messages);

  return (
    <>
      <AuthContext.Provider
        value={{ isAuth, setIsAuth, tempFriends, tempMessages }}
      >
        <RouterProvider router={router}></RouterProvider>
      </AuthContext.Provider>
    </>
  );
}

export default App;

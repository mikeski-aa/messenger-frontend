import { createContext, useEffect, useState } from "react";
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
import validateUser from "./services/authValidate";
import { validate } from "uuid";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import getFriends from "./services/getFriends";

export const AuthContext = createContext();

function App() {
  const tempf = [
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
  const [user, setUser] = useState({ username: "", id: null });
  const [isAuth, setIsAuth] = useState("");
  const [friends, setFriends] = useState([]);
  const [tempFriends, setTempFriends] = useState(tempf);
  const [tempMessages, setTempMessages] = useState(messages);

  useEffect(() => {
    const validate = async () => {
      const result = await validateUser();
      console.log(result);

      if (typeof result === "undefined") {
        console.log("USER IS NOT LOGGED IN! GO BACK");
        setIsAuth(false);
      } else {
        console.log("see when uE runs:");
        console.log(result.user.id);
        const friendData = await getFriends(result.user.id);
        setFriends(friendData);
        setUser(result.user);
        setIsAuth(true);
      }
    };

    validate();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute loggedIn={isAuth}>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "friends",
          element: <Friends />,
        },
        {
          path: "profile",
          element: <UserProfile username={user.username} />,
        },
        {
          path: "messages",
          element: <Messages />,
        },
        {
          path: "convo/:id",
          element: <UserMessage />,
        },
      ],
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
  ]);

  return (
    <>
      <AuthContext.Provider
        value={{ isAuth, setIsAuth, tempFriends, tempMessages, user, setUser }}
      >
        <RouterProvider router={router}></RouterProvider>
      </AuthContext.Provider>
    </>
  );
}

export default App;

// dummy friendlist state

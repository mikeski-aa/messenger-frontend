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

export const AuthContext = createContext();

function App() {
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
  const [user, setUser] = useState({ username: "", id: null });
  const [isAuth, setIsAuth] = useState("");
  const [tempFriends, setTempFriends] = useState(friends);
  const [tempMessages, setTempMessages] = useState(messages);

  useEffect(() => {
    const test = async () => {
      const result = await validateUser();
      console.log(result);

      if (typeof result === "undefined") {
        console.log("USER IS NOT LOGGED IN! GO BACK");
        setIsAuth(false);
      } else {
        setUser(result.user);
        setIsAuth(true);
        console.log(user);
      }
    };

    test();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute loggedIn={isAuth}>
          <Home />
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
          children: [
            {
              path: ":id",
              element: <UserMessage />,
            },
          ],
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

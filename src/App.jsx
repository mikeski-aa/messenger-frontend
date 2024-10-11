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
// import validateUser from "./services/authValidate";
import { validateUser } from "./services/miscCalls";
import { validate } from "uuid";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
// import getUserData from "./services/deprecated_user_calls/getUserData";
import { getUserData } from "./services/userCalls";
import Groups from "./pages/Groups";

export const AuthContext = createContext();

function App() {
  const [user, setUser] = useState({
    username: "",
    id: null,
    status: "online",
    imageURL: "default",
  });
  const [isAuth, setIsAuth] = useState("");
  const [friends, setFriends] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const validate = async () => {
      setLoading(true);
      const result = await validateUser();
      console.log(result);
      setLoading(false);
      if (typeof result === "undefined") {
        console.log("USER IS NOT LOGGED IN! GO BACK");
        setIsAuth(false);
      } else {
        const userData = await getUserData(result.user.id);
        setFriends(userData.friends);
        setRequests(userData.requests);
        setUser(result.user);
        setIsAuth(true);
      }
    };

    validate();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "friends",
          element: <Friends />,
        },
        {
          path: "profile",
          element: (
            <UserProfile
              username={user.username}
              status={user.status}
              setUser={setUser}
              user={user}
            />
          ),
        },
        {
          path: "messages",
          element: <Messages />,
        },
        {
          path: "convo/:id",
          element: <UserMessage />,
        },
        {
          path: "groups",
          element: <Groups />,
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
        value={{
          isAuth,
          setIsAuth,
          user,
          setUser,
          friends,
          setFriends,
          requests,
          setRequests,
          loading,
        }}
      >
        <RouterProvider router={router}></RouterProvider>
      </AuthContext.Provider>
    </>
  );
}

export default App;

import convoPermissionCheck from "../services/convoPermissionCheck";
import { AuthContext } from "../App";
import { useContext } from "react";
import { useParams } from "react-router-dom";

// function to check if user can view given convo
async function ProtectedConvo({ children }) {
  const authContext = useContext(AuthContext);
  const { convoid } = useParams();

  //   if (typeof authContext.user.id == "undefined") {
  //     console.log("error found");
  //   }

  console.log(convoid, authContext.user.id);
  const test = await convoPermissionCheck(convoid, authContext.user.id);

  console.log(test);

  return <>{children}</>;
}

export default ProtectedConvo;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// custom hook to redirect if not validated login

function useRedirectValidate(error) {
  const navigate = useNavigate();

  useEffect(() => {
    if (error === false) {
      return navigate("/login");
    }

    return () => {};
  });
}

export default useRedirectValidate;

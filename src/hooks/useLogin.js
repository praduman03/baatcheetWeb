import { useState } from "react";
// import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const loginApi = async ({ username, password }) => {
    if (!username || !password) {
      // toast.error("Please fill all the fields");
      return;
    }
    setLoading(true);
    console.log(import.meta.env.VITE_APP_SERVER_API)
    try {
      const res = await fetch(`${import.meta.env.VITE_APP_SERVER_API}` + "/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        // toast.error(data.message);
        throw new Error(data.message);
      }

      // toast.success(data.message);
      localStorage.setItem("baatcheet", JSON.stringify(data.user));
      localStorage.setItem("token", "Bearer " + data.token);
      setAuthUser(data.user);
    } catch (error) {
      // toast.error(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, loginApi };
};

export default useLogin;

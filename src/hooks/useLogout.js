import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logoutApi = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_APP_SERVER_API}` + "/api/auth/logout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      }
      toast.success(data.message);
      localStorage.removeItem("baatcheet");
      localStorage.removeItem("token");
      setAuthUser(null);
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logoutApi };
};

export default useLogout;

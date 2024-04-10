import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState();

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${import.meta.env.VITE_APP_SERVER_API}` + "/api/user/", {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        }
        });
        const data = await res.json();
        if (!res.ok) {
          // toast.error(data.message);
          throw new Error(data.message);
        }
        setConversations(data);
      } catch (error) {
        // toast.error(error.message);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);
  return { loading, conversations };
};

export default useGetConversations;

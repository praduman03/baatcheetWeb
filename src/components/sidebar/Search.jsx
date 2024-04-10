import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";
import "./sidebar.css";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";

const Search = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const {conversations, loading} = useGetConversations();
  const handleSubmit = () => {
    if (!search) {
      return;
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase()),
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };

  return (
    <div className="search">
      <Toaster />
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button className="pr-6" onClick={handleSubmit}>
        {loading? <span className="loading loading-spinner"></span> :<FaSearch color="#724ff9" size={20} />}
      </button>
    </div>
  );
};

export default Search;

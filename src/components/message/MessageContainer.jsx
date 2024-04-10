import { useEffect, useState } from "react";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import "./message.css";
import Messages from "./Messages";
import { IoSend } from "react-icons/io5";
import talking from "../../assets/talking.png";
import useSendMessage from "../../hooks/useSendMessage";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { authUser } = useAuthContext();
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  if (!selectedConversation) {
    return loading ? (
      <span className="loading loading-spinner h-full"></span>
    ) : (
      <div className="message-container">
        <div className="flex justify-center items-center flex-col gap-4 mt-auto mb-auto">
          <h1 className="text-4xl">Hi 👋 {authUser.fullName}...</h1>
          <img src={talking} alt="" />
          <div className="text-2xl">
            Select conversations from the chat and start talking!
          </div>
        </div>
      </div>
    );
  }
  const handleSubmit = async () => {
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <div className="message-container">
      <div className="flex items-center">
        <img
          className="avatar"
          src={selectedConversation.profileImage || null}
          alt=""
        />
        <h2>{selectedConversation.fullName}</h2>
      </div>
      <hr />
      <Messages />
      <div className="message-input-div">
        <input
          className="message-input"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSubmit} className="message-input-send">
          <IoSend size={30} color="#724ff9" />
        </button>
      </div>
    </div>
  );
};

export default MessageContainer;

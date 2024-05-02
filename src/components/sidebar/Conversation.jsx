/* eslint-disable react/prop-types */
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";
import "./sidebar.css";

const Conversation = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <div
      onClick={() => setSelectedConversation(conversation)}
      className={`flex justify-between rounded-md items-center w-full pr-10 ${
        isSelected ? "bg-[#724ff9] text-white" : ""
      }`}
    >
      <div className="flex items-center">
        <img
          className={`avatar border-lime-700 ${
            isOnline ? "border-lime-700" : ""
          }`}
          src={conversation.profileImage || null}
          alt=""
        />
        <h2> {conversation.fullName || null}</h2>
        <br />
      </div>
      {isOnline && (
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      )}
    </div>
  );
};

export default Conversation;

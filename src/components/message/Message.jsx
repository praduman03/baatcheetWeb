/* eslint-disable react/prop-types */
import { useAuthContext } from "../../context/AuthContext";
import { formatTime } from "../../utils/formatTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe ? "#724ff9" : "";
  const shakeClass = "animate-shake";

  return (
    <div className={`chat ${chatClassName} m-2`}>
      <div
        className={`chat-bubble chat-bubble-primary text-white ${bubbleBgColor} ${shakeClass}`}
      >
        <p>{message.message}</p>
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center pt-2">
        {formatTime(message.createdAt)}
      </div>
    </div>
  );
};

export default Message;

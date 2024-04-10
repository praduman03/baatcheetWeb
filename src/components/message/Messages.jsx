import { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import chatImage from "../../assets/chat image.png";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {messages.length === 0 && (
        <div className="flex justify-center flex-col mt-20">
          <img className="size-30 mr-auto ml-auto" src={chatImage} />
          <p className="text-center text-2xl m-10">
            Send a message to start the conversation...
          </p>
        </div>
      )}
    </div>
  );
};

export default Messages;

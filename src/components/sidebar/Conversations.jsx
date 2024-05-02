import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  return loading ? (
    <span className="loading loading-spinner h-full"></span>
  ) : (
    <div className="w-full overflow-auto">
      {conversations &&
        conversations.map((conversation) => (
          <div key={conversation._id}>
          <Conversation
            conversation={conversation}
          />
          </div>
        ))}
    </div>
  );
};

export default Conversations;

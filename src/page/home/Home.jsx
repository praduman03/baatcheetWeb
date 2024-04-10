import MessageContainer from "../../components/message/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;

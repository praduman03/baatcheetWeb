import Search from "./Search";
import "./sidebar.css";
import Conversations from "./Conversations";
import useLogout from "../../hooks/useLogout";

const Sidebar = () => {
  const { loading, logoutApi } = useLogout();
  return (
    <div className="sidebar">
      <Search />
      <Conversations />
      <div className="pt-4">
        {loading ? (
          <button className="logout">
            <span className="loading loading-spinner"></span>
          </button>
        ) : (
          <button className="logout" onClick={logoutApi}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

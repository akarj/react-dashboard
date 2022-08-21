import {
  ChatBubbleOutlineOutlined,
  DarkModeOutlined,
  FullscreenExitOutlined,
  LanguageOutlined,
  ListOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext/darkModeContext";
import "./Navbar.scss";
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input
            type="text"
            className="form-control search"
            placeholder="Search..."
            id="text-search"
          />
          <SearchOutlined />
        </div>

        <div className="items">
          <div className="item">
            <LanguageOutlined id="language" />
            <label htmlFor="language">English</label>
          </div>
          <div className="item">
            <DarkModeOutlined onClick={() => dispatch({ type: "TOGGLE" })} />
          </div>
          <div className="item">
            <FullscreenExitOutlined />
          </div>
          <div className="item">
            <NotificationsNoneOutlined />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlined />
          </div>
          <div className="item">
            <img
              src="https://source.unsplash.com/400x400"
              alt="user profile"
              className="user-profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import {
  AccountCircleOutlined,
  Dashboard,
  ExitToApp,
  InsertChart,
  Inventory2Outlined,
  LocalShipping,
  MonitorHeart,
  NotificationsOutlined,
  PersonOutlineOutlined,
  PsychologyOutlined,
  SettingsApplications,
  StoreOutlined,
} from "@mui/icons-material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext/darkModeContext";
import "./Sidebar.scss";
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" className="links">
          <span className="logo">Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Dashboard className="icon" />
            <span>dashboard</span>
          </li>
          <p className="title">LISTS</p>

          <Link to="/users" className="links">
            <li>
              <PersonOutlineOutlined className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" className="links">
            <li>
              <StoreOutlined className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <Inventory2Outlined className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">activities</p>

          <li>
            <InsertChart className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsOutlined className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">Services</p>
          <li>
            <MonitorHeart className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlined className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplications className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">users</p>
          <li>
            <AccountCircleOutlined className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToApp className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;

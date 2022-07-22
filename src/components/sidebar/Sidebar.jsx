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
import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin</span>
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

          <li>
            <PersonOutlineOutlined className="icon" />
            <span>Users</span>
          </li>
          <li>
            <StoreOutlined className="icon" />
            <span>Products</span>
          </li>
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
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;

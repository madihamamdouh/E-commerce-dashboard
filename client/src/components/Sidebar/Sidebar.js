import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import CategoryIcon from "@mui/icons-material/Category";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LogoutIcon from "@mui/icons-material/Logout";
import "./sidebar.scss";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/Actions/UserAction";
const Sidebar = () => {
  const { dd } = useContext(DarkModeContext);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className="sidebar">
      <div className="top">
        <div className="mainlogo">
          <span className="logo">
            <Link to="/" className="logo">
              Gitt.
            </Link>
          </span>
          <hr />
        </div>
        <div className="profile">
          <img src="./images/14.jpg" alt="profile" />
          <Link to="/users:" className="link">
            Nona salem
          </Link>
        </div>
      </div>

      <div className="center">
        <ul className="dashlist">
          <li className="dashitem">
            <DashboardIcon className="icon" />
            <span>
              <Link to="/" className="link">
                Dashboard
              </Link>
            </span>
          </li>
          <li className="dashitem">
            <SupervisedUserCircleIcon className="icon" />
            <span>
              <Link to="/users" className="link">
                Users
              </Link>
            </span>
          </li>
          <li className="dashitem">
            <CategoryIcon className="icon" />
            <span>
              <Link to="/products" className="link">
                Products
              </Link>
            </span>
          </li>
          <li className="dashitem">
            <DashboardIcon className="icon" />
            <Link to="/orders" className="link">
              Orders
            </Link>
          </li>
          <li className="dashitem">
            <LocalShippingIcon className="icon" />
            <Link to="/brand" className="link">
              Brands
            </Link>
          </li>
          <li className="dashitem">
            <NotificationsActiveIcon className="icon" />
            <Link to="/list" className="link">
              Notifications
            </Link>
          </li>
          <li className="dashitem" onClick={logoutHandler}>
            <LogoutIcon className="icon" />
            <Link to="/login" className="link">
              Logout
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className="bottom">
        <div className="colorOpt" onClick={() => dd({ type: "LIGHT" })}></div>
        <div className="colorOpt" onClick={() => dd({ type: "DARK" })}></div>
      </div> */}
    </div>
  );
};

export default Sidebar;

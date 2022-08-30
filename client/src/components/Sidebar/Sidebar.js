import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import CategoryIcon from "@mui/icons-material/Category";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LogoutIcon from "@mui/icons-material/Logout";
import "./sidebar.scss";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/apiCalls";

const Sidebar = () => {
  // let { dispatch } = useContext(DarkModeContext);
  const dispatch = useDispatch();
  const admins = useSelector((state) => state.user.currentUser);
  const handelLogout = () => {
    logout(dispatch);
  };
  return (
    <div className="sidebar">
      <div className="top">
        <div className="mainlogo">
          <span className="logo">
            <Link to="/" className="logo">
              SOUQ.COM
            </Link>
          </span>
          <hr />
        </div>
        <div className="profile">
          <img src={admins.img} alt="" />
          <Link to="/admin" className="link">
            {admins.username}
          </Link>
        </div>
      </div>

      <div className="center">
        <ul className="dashlist">
          <Link to="/" className="link">
            <li className="dashitem">
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/users" className="link">
            <li className="dashitem">
              <SupervisedUserCircleIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" className="link">
            <li className="dashitem">
              <CategoryIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/orders" className="link">
            <li className="dashitem">
              <ReceiptLongIcon className="icon" />
              Orders
            </li>
          </Link>
          <Link to="/brands" className="link">
            <li className="dashitem">
              <LocalMallIcon className="icon" />
              Brands
            </li>
          </Link>
          <Link to="/login" className="link" onClick={handelLogout}>
            <li className="dashitem">
              <LogoutIcon className="icon" />
              Logout
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOpt"
          // onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOpt"
          //onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;

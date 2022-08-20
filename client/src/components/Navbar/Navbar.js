import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DragHandleOutlinedIcon from "@mui/icons-material/DragHandleOutlined";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/darkModeContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const admins = useSelector((state) => state.user.currentUser);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="searchIcon icon" />
        </div>
        <div className="items">
          <div className="item">
            <TranslateOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <NightsStayOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="notify"></div>
          </div>
          <Link to="/admin">
            <div className="item">
              <img src={admins.img} alt="avatar" className="avatar" />
            </div>
          </Link>

          <div className="item">
            <DragHandleOutlinedIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navebar;

import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PaidIcon from "@mui/icons-material/Paid";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Link } from "react-router-dom";

const Widget = ({ type }) => {
  let data;
  const amount = 5;
  const deff = 30;
  switch (type) {
    case "users":
      data = {
        title: "new users",
        isMoney: false,
        link: "see all new users",
        to: "/newusers",
        icon: (
          <PersonIcon
            className="icon"
            style={{ color: "green", background: "rgba(0,128,0,0.2)" }}
          />
        ),
      };
      break;
    case "orders":
      data = {
        title: "orders",
        isMoney: false,
        link: "see all orders",
        to: "/orders",
        icon: (
          <ShoppingBagIcon
            className="icon"
            style={{ color: "goldenrod", background: "rgba(218,165,45,0.2)" }}
          />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "earnings",
        isMoney: true,
        link: "view net earnings",
        to: "/",
        icon: (
          <PaidIcon
            className="icon"
            style={{ color: "crimson", background: "rgba(318,0,0,0.2)" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "balance",
        isMoney: true,
        link: "see details",
        to: "/",
        icon: (
          <AccountBalanceWalletIcon
            className="icon"
            style={{ color: "purple", background: "rgba(128,0,128,0.2)" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <Link to={data.to} style={{ textDecoration: "none" }}>
          <span className="link">{data.link}</span>
        </Link>
      </div>
      <div className="right">
        <div className="percentag positive ">
          <KeyboardArrowUpIcon />
          {deff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;

import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Featured</h1>
        <MoreVertIcon className="moreIcon" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={60} text="60%" strokeWidth={2} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">Previous transactionsp processing </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult  negative">
              <KeyboardArrowDownIcon />
              <div className="result">$217</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive ">
              <KeyboardArrowUpIcon />
              <div className="result">$1050</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive ">
              <KeyboardArrowUpIcon />
              <div className="result">$7500</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

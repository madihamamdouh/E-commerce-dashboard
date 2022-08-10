import "./single.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Chart from "../../components/Chart/Chart";
import { Link } from "react-router-dom";

const Single = ({ users }) => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className={users.id ? "left" : "admins"}>
            <Link
              to={users.id ? "/users/update" : "/admin/update"}
              style={{ textDecoration: "none" }}
            >
              <div className="editButton">Edit</div>
            </Link>
            <div className="item">
              <img src={users.img} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemtitle">{users.name}</h1>
                {users.id && (
                  <div className="detailItem">
                    <span className="itemKey">ID:</span>
                    <span className="itemValue">{users.id}</span>
                  </div>
                )}
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{users.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{users.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">{users.address}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{users.country}</span>
                </div>
              </div>
            </div>
          </div>
          {users.id && (
            <div className="right">
              <Chart aspect={3 / 2} title="User Spending ( Last 6 Months)" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Single;

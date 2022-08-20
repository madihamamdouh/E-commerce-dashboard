import "./single.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Chart from "../../components/Chart/Chart";
import { Link, useLocation } from "react-router-dom";
import { format } from "timeago.js";
import { useEffect } from "react";
import { userRequest } from "../../requestApi";
import { useState } from "react";
import { useSelector } from "react-redux";

const Single = ({ users }) => {
  const location = useLocation();
  const [user, setUser] = useState("");
  const userId = location.pathname.split("/")[2];
  const admins = useSelector((state) => state.user.currentUser);
  console.log(admins);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await userRequest.get("users/find/" + userId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [userId]);

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
              <img
                src={userId ? user.img : admins.img}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemtitle">
                  {userId ? user.username : admins.username}
                </h1>
                {users.id && (
                  <div className="detailItem">
                    <span className="itemKey">ID:</span>
                    <span className="itemValue">
                      {userId ? user._id : admins._id}
                    </span>
                  </div>
                )}
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">
                    {userId ? user.email : admins.email}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">
                    {userId ? user.phone : admins.phone}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    {userId ? user.address : admins.address}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">create account At:</span>
                  <span className="itemValue">
                    {userId ? format(user.createdAt) : format(admins.createdAt)}
                  </span>
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

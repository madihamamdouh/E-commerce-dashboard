import "./productSingle.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Chart from "../../components/Chart/Chart";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { userRequest } from "../../requestApi";
import { useEffect, useMemo, useState } from "react";

function ProductSingle() {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stat");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  //const location = useLocation();
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const product = useSelector((state) =>
    state.product.products.find((item) => item._id === productId)
  );
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <Link
              to={"/products/update/" + productId}
              style={{ textDecoration: "none" }}
            >
              <div className="editButton">Edit</div>
            </Link>
            <h1 className="title">Product Info</h1>
            <div className="item">
              <img src={product.img} alt="" className="itemImge" />
              <div className="details">
                <h1 className="itemTitle">Product: {product.title}</h1>
                <div className="detailItem">
                  <span className="itemKey">ID:</span>
                  <span className="itemValue">{productId}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Price:</span>
                  <span className="itemValue">{product.price + "$"}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <span className="itemValue">{product.desc}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Size:</span>
                  <span className="itemValue">{product.size}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Color:</span>
                  <span className="itemValue">{product.color}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart
              data={userStats}
              title="User Analytics"
              grid
              dataKey="Active User"
              aspect={2 / 1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSingle;

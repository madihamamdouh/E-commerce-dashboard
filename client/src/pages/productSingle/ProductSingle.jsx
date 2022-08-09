import "./productSingle.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Chart from "../../components/Chart/Chart";
import { Link } from "react-router-dom";
import DashContext from "../../Context/dataContext";

function ProductSingle() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <Link to="/products/update" style={{ textDecoration: "none" }}>
              <div className="editButton">Edit</div>
            </Link>
            <h1 className="title">Product Info</h1>
            <div className="item">
              <img
                src="https://cdn.sklum.com/ie/1062614/sofa-de-2-plazas-en-lino-y-tela-aktic.jpg"
                alt=""
                className="itemImge"
              />
              <div className="details">
                <h1 className="itemTitle">Product ID: 1</h1>
                <div className="detailItem">
                  <span className="itemKey">Name:</span>
                  <span className="itemValue">Sofa</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Price:</span>
                  <span className="itemValue">450$</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <span className="itemValue">Width : " " , Height :" "</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Made In:</span>
                  <span className="itemValue">KSA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 2} title="Product Sales( Last 6 Months)" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSingle;

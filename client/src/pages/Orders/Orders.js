import "./orders.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Order from "../../components/Table/Order";
const Orders = () => {
  return (
    <div className="orders">
      <Sidebar className="side" />
      <div className="orderContainer">
        <Navbar />
        <div className="orderlist">
          <div className="listTitle">Last Orders</div>
          <Order />
        </div>
      </div>
    </div>
  );
};

export default Orders;

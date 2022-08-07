import "./orders.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Tablee from "../../components/Table/Table";

const Orders = () => {
  return (
    <div className="order">
      <Sidebar />
      <div className="orderContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">Orders</div>
          <Tablee />
        </div>
      </div>
    </div>
  );
};

export default Orders;

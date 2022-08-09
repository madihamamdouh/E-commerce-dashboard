import "./orders.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Tablee from "../../components/Table/Table";
import { useContext, useEffect, useState } from "react";
import DashContext from "../../Context/dataContext";

const Orders = () => {
  const { orders } = useContext(DashContext);
  const [rowOrders, setRowOrders] = useState([]);
  useEffect(() => {
    let customRowOrders = [];
    orders.map((order) => {
      let customOrder = {
        id: order.id,
        product: "",
        customer: order.customer.first_name + " " + order.customer.last_name,
        img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        date: order.created_at,
        amount: order.line_items[0].quantity,
        method: "Cash on delivery",
        status: order.financial_status,
      };
      customRowOrders.push(customOrder);
    });
    setRowOrders(customRowOrders);
  }, [orders]);

  return (
    <div className="order">
      <Sidebar className="side" />
      <div className="orderContainer">
        <Navbar />
        <div className="orderlist">
          <div className="listTitle">Last Orders</div>
          <Tablee orders={rowOrders} />
        </div>
      </div>
    </div>
  );
};

export default Orders;

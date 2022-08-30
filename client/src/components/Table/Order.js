import * as React from "react";
import "./order.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { userRequest } from "../../requestApi";
import { useEffect } from "react";

export default function Order() {
  const [orders, setOrder] = useState([]);

  const handleDelete = async (id) => {
    try {
      const res = await userRequest.delete("/orders/" + id);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await userRequest.get("orders/");
        setOrder(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrder();
  }, []);
  console.log(orders);
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">User ID</TableCell>
            <TableCell className="tableCell">Product ID</TableCell>
            <TableCell className="tableCell">Quantity</TableCell>
            <TableCell className="tableCell">Total </TableCell>
            <TableCell className="tableCell">Address</TableCell>
            <TableCell className="tableCell">Status </TableCell>
            <TableCell className="tableCell">Action </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order._id}>
              <TableCell className="tableRow">{order._id}</TableCell>
              <TableCell className="tableRow">{order.userId}</TableCell>
              <TableCell className="tableRow">
                {order.products[0].quantity}
              </TableCell>
              <TableCell className="tableRow">{order.totalPrice}</TableCell>
              <TableCell className="tableRow">
                {order.address.country}-{order.address.city}
              </TableCell>
              <TableCell className={`tableRow  ${order.status}`}>
                {order.status}
              </TableCell>
              <TableCell className="tableRow ">
                <div
                  className="deleteButton"
                  onClick={() => handleDelete(order._id)}
                >
                  Delete
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

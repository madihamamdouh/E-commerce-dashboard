import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./order.scss";
import { useState, useEffect } from "react";
import { userRequest } from "../../requestApi";

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "customer", headerName: "customer-Id", width: 200 },
  { field: "quantity", headerName: "Quantity", width: 130 },
  { field: "total", headerName: "TotalAmount", width: 130 },
  { field: "address", headerName: "Address", width: 100 },
  {
    field: "status",
    headerName: "Status",
    type: "string",
    width: 100,
  },
];

export default function Order() {
  const [orders, setOrder] = useState([]);
  const [rowOrders, setRowOrders] = useState([]);
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
        const res = await userRequest.get("/orders");
        setOrder(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrder();

    let rowOrder = [];
    orders.forEach((order) => {
      let cellOrder = {
        ...order,
        id: order._id,
        customer: order.userId,
        quantity: order.products[0].quantity,
        total: `$${order.amount}`,
        address: order.address,
        status: order.status,
      };
      rowOrder.push(cellOrder);
    });
    setRowOrders(rowOrder);
  }, []);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="order" style={{ height: 480, width: "100%" }}>
      <DataGrid
        id={Date.now()}
        rows={rowOrders}
        columns={columns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  );
}

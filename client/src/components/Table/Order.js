import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./order.scss";
import DashContext from "../../Context/dataContext";
import { useState, useEffect, useContext } from "react";
import { deleteOrder } from "../../ShopifyFront/order";
const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "product",
    headerName: "Product",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 130,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="img" />
          {params.row.product}
        </div>
      );
    },
  },
  { field: "customer", headerName: "Customer", width: 130 },
  { field: "date", headerName: "Date", width: 130 },
  { field: "amount", headerName: "Amount", width: 100 },
  {
    field: "payment",
    headerName: "Payment",
    type: "text",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    type: "text",
    width: 100,
  },
];

export default function Order() {
  const [data, setData] = useState("");
  const { orders } = useContext(DashContext);
  const handleDelete = (id) => {
    deleteOrder(id)
      .try((res) => {
        console.log("deleted");
      })
      .catch((er) => {
        console.log(er.response);
      });
  };

  useEffect(() => {
    let rowOrder = [];
    orders.map((order) => {
      let cellOrder = {
        id: order.id,
        product: "T-shert",
        customer: order.customer.first_name + " " + order.customer.last_name,
        date: order.created_at,
        amount: order.line_items[0].quantity,
        payment: "Cash on delivery",
        status: order.financial_status,
        img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      };
      rowOrder.push(cellOrder);
    });
    setData(rowOrder);
  }, [orders]);
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
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  );
}

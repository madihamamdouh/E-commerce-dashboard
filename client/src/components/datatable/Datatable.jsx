import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../Data/productData";
import { useState, useContext, useEffect } from "react";
import DashContext from "../../Context/dataContext";

import { Link } from "react-router-dom";

const Datatable = () => {
  const [data, setData] = useState(userRows);
  const { customers } = useContext(DashContext);
  const handleDelete = (id) => {};

  useEffect(() => {
    let rowCustomers = [];
    customers.map((customer) => {
      let rowCustomer = {
        id: customer.id,
        username: customer.first_name + " " + customer.last_name,
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: customer.email,
        status: customer.state,
        age: 0,
      };
      rowCustomers.push(rowCustomer);
    });
    setData(rowCustomers);
  }, [customers]);
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/users/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
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
    <div className="datatable" style={{ height: 490, width: "92%" }}>
      <div className="datatableTitle">All Users</div>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;

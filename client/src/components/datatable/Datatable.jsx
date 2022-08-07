import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import DashContext from "../dataContext";

const Datatable = () => {
  const [data, setData] = useState(userRows);
  const { customers } = useContext(DashContext);
  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
  };

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
      }
      rowCustomers.push(rowCustomer);
    })
    setData(rowCustomers);
  }, [customers])

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/update" style={{ textDecoration: "none" }}>
              <div className="viewButton">Edit</div>
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
    <div className="datatable">
      <div className="datatableTitle">
        All users
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;

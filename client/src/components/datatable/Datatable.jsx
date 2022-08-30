import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { userRequest } from "../../requestApi";

const userColumns = [
  { field: "_id", headerName: "ID", width: 100 },
  {
    field: "username",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "address",
    headerName: "Address",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 120,
  },
];

const Datatable = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);
  const handelDelete = async (id) => {
    try {
      const res = await userRequest.delete("users/" + id);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/users/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handelDelete(params.row._id)}
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
        rows={users}
        getRowId={(row) => row._id}
        columns={userColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;

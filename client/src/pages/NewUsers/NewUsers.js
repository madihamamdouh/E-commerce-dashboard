import "./newusers.scss";
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
import Sidebar from "../../components/Sidebar/Sidebar";
import Navebar from "../../components/Navbar/Navbar";

const Tablee = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="orders">
      <Sidebar className="side" />
      <div className="orderContainer">
        <Navebar />
        <div className="orderlist">
          <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell">Tracking ID</TableCell>
                  <TableCell className="tableCell">Name</TableCell>
                  <TableCell className="tableCell">Email</TableCell>
                  <TableCell className="tableCell">Address</TableCell>
                  <TableCell className="tableCell">state</TableCell>
                  <TableCell className="tableCell">Create At</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell className="tableRow">{row._id}</TableCell>
                    <TableCell className="tableRow">
                      <div className="productWrapper">
                        <img src={row.img} alt="" className="productImg" />
                        {row.username}
                      </div>
                    </TableCell>
                    <TableCell className="tableRow">{row.email}</TableCell>
                    <TableCell className="tableRow">{row.address}</TableCell>
                    <TableCell className="tableRow">{row.img}</TableCell>
                    <TableCell className="tableRow">{row.createdAt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Tablee;

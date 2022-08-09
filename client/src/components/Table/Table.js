import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Tablee = ({ orders }) => {
  const rows = [
    {
      id: 3586,
      product: "T-shert Adidas",
      customer: "Mohammed Ashraf",
      img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      date: "1 March",
      amount: 125,
      method: "Cash on delivery",
      status: "Approved",
    },
    {
      id: 45454,
      product: "T-shert Adidas",
      customer: "Mohammed Ashraf",
      img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      date: "1 June",
      amount: 12,
      method: "Online delivery",
      status: "Pending",
    },
    {
      id: 6554565,
      product: "T-shert Adidas",
      customer: "Mohammed Ashraf",
      img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      date: "1 April",
      amount: 5,
      method: "Cash on delivery",
      status: "Approved",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders !== undefined &&
            orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="tableRow">{order.id}</TableCell>
                <TableCell className="tableRow">
                  <div className="productWrapper">
                    <img src={order.img} alt="" className="productImg" />
                    {order.product}
                  </div>
                </TableCell>
                <TableCell className="tableRow">{order.customer}</TableCell>
                <TableCell className="tableRow">{order.date}</TableCell>
                <TableCell className="tableRow">{order.amount}</TableCell>
                <TableCell className="tableRow">{order.method}</TableCell>
                <TableCell className="tableRow">
                  <span className={order.status}> {order.status}</span>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tablee;

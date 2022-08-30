import "./product.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProduct } from "../../Redux/apiCalls";

const productColumns = [
  { field: "_id", headerName: "ID", width: 150 },

  {
    field: "product",
    headerName: "Product",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="IMG" />
          {params.row.title}
        </div>
      );
    },
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "size",
    headerName: "Size",
    width: 80,
  },
  {
    field: "color",
    headerName: "Color",
    width: 100,
  },
  {
    field: "inStock",
    headerName: "InStock",
    width: 100,
  },
];

function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  useEffect(() => {
    getProduct(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={"/products/" + params.row._id}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">Edit</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="product" style={{ height: 490, width: "92%" }}>
      <div className="productTitle">All products</div>
      <DataGrid
        rows={products}
        getRowId={() => Math.random() * 100}
        columns={productColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  );
}
export default Product;

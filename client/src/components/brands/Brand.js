import "./brand.scss";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns } from "../../categorydatasourc";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import DashContext from "../dataContext";
import { deleteProduct, getProduct } from "../../ShopifyFront/product";


function Brand() {
  const {categories} = useContext(DashContext);
  const [data, setData] = useState([]);
  // const [product, setProduct] = setProduct({});
  const handleDelete = (id) => {
    console.log(id);
    deleteProduct(id)
    .then((res)=>{
        console.log(res.data);
    })
    .catch((er)=>{
        console.log(er.response);
    })
  };

  useEffect(()=>{
    console.log("************************************************************");
   console.log(categories);
    let rowCategories = [];
     categories?.map((category)=>{
        let customCategory = {

          id : category.id , 
          name : category.title, 
          img : category.image, 
          description : category.body_html, 
        }
        rowCategories.push(customCategory);
    })
    setData(rowCategories);
  }, [categories])
  
  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/products/update" style={{ textDecoration: "none" }}>
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
    <div className="product">
      <div className="productTitle">
        All Brands
        <Link to="/products/new" className="link">
          Add New Brand
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={productColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}
export default Brand;

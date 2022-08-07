import "./product.scss";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns, productRows } from "../../productsource";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import DashContext from "../dataContext";
import { deleteProduct, getProduct } from "../../ShopifyFront/product";


function Product({product}) {
  const {products} = useContext(DashContext);
  const [data, setData] = useState(productRows);
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

    let rowProducts = [];
    products.map((product)=>{
        let customProduct = {

          id : product.id , 
          name : product.title, 
          img : "https://cdn.sklum.com/ie/1062614/sofa-de-2-plazas-en-lino-y-tela-aktic.jpg", 
          price : product.variants[0].price , 
          description : product.body_html, 
        }
        rowProducts.push(customProduct);
    })
    setData(rowProducts);
  }, [products])
  
  
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
        All products
        <Link to="/products/new" className="link">
          Add New
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
export default Product;

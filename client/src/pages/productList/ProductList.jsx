import "./productList.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Product from "../../components/product/Product";
import DashContext from "../../components/dataContext";
import { useContext } from "react";



const ProductList = () => {
  const {products} = useContext(DashContext);


  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />2
        <Product />
      
      </div>
    </div>
  );
};

export default ProductList;

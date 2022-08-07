import "./productList.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Product from "../../components/product/Product";

const ProductList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Product />
      </div>
    </div>
  );
};

export default ProductList;

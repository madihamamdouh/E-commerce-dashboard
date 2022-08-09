import "./brandList.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Brand from "../../components/brands/Brand";

const BrandList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Brand />
      </div>
    </div>
  );
};

export default BrandList;

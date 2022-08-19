import "./update.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../Redux/apiCalls";

const Update = ({ header }) => {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesk] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const location = useLocation();
  const productId = location.pathname.split("/")[3];
  const dispatch = useDispatch();
  let newProduct = { productId, name, desc, price, color, size };
  const product = useSelector((state) =>
    state.product.products.find((item) => item._id === productId)
  );
  console.log(productId);

  const handelUpdate = (e) => {
    e.preventDefault();
    updateProduct(productId, newProduct, dispatch);
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <div className="bottom">
          <div className="left">
            <h1>{header}</h1>
            {/* <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            /> */}
          </div>
          <div className="right">
            <form
              className={
                header === "Add New Product" || "Update Product"
                  ? "form1"
                  : "form2"
              }
            >
              {/* <div className="formInput">
                <label htmlFor="file">Image:</label>
                <input
                  type="text"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  placeholder="past you URL"
                />
              </div> */}

              <div className="formInput">
                <label>Product Name</label>
                <input
                  type="text"
                  placeholder="jj"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Product Desc</label>
                <input
                  type="text"
                  placeholder={product.desc}
                  onChange={(e) => setDesk(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Price</label>
                <input
                  type="number"
                  placeholder={product.price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Color</label>
                <input
                  type="text"
                  placeholder={product.color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Size</label>
                <input
                  type="number"
                  placeholder={product.size}
                  onChange={(e) => setSize(e.target.value)}
                />
              </div>

              <button onClick={handelUpdate}> ADD </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;

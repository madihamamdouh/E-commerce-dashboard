import "./new.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import { useState } from "react";
import { addProduct } from "../../ShopifyFront/product";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [name, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [vendor, setVendor] = useState("");
  const [inStock, setInStock] = useState(false);

  const createPostHandler = async (e) => {
    e.preventDefault();
    // const newProduct = { name, desc, price, inStock, brand, category, vendor };

    // if (file) {
    //   const data = new FormData();
    //   const filename = Date.now() + file.name;
    //   data.append("name", filename);
    //   data.append("file", file);
    //   newProduct.img[0] = filename;
    //   try {
    //     addImage(productId, _src, _width, _height, _alt)
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <div className="bottom">
          <div className="left">
            <h1>{title}</h1>
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={createPostHandler}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button type="submit"> Done </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;

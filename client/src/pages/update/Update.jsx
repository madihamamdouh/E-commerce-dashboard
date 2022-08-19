import "./update.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { useState } from "react";
import { updateProduct } from "../../Redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Update = ({ header }) => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const changeInput = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const location = useLocation();
  const productId = location.pathname.split("/")[3];

  const product = useSelector((state) =>
    state.product.products.find((item) => item._id === productId)
  );

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const newProduct = { ...inputs, img: downloadURL, productId };
          updateProduct(productId, newProduct, dispatch);
          console.log(newProduct);
        });
      }
    );
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <div className="bottom">
          <div className="left">
            <h1>{header}</h1>
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
            <form
              className={
                header === "Add New Product" || "Update Product"
                  ? "form1"
                  : "form2"
              }
            >
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

              <div className="formInput">
                <label>Product Name</label>
                <input
                  type="text"
                  name="title"
                  // placeholder={product.title}
                  onChange={changeInput}
                />
              </div>
              <div className="formInput">
                <label>Product Desc</label>
                <input
                  type="text"
                  name="desc"
                  // placeholder={product.desc}
                  onChange={changeInput}
                />
              </div>
              <div className="formInput">
                <label>Product Category</label>
                <input
                  type="text"
                  name="category"
                  // placeholder={product.category}
                  onChange={changeInput}
                />
              </div>
              <div className="formInput">
                <label>Product Brand</label>
                <input
                  type="text"
                  name="brand"
                  // placeholder={product.brand}
                  onChange={changeInput}
                />
              </div>
              <div className="formInput">
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  // placeholder={product.price}
                  onChange={changeInput}
                />
              </div>
              <div className="formInput">
                <label>Color</label>
                <input
                  type="text"
                  name="color"
                  // placeholder={product.color}
                  onChange={changeInput}
                />
              </div>
              <div className="formInput">
                <label>Size</label>
                <input
                  type="number"
                  name="size"
                  // placeholder={product.size}
                  onChange={changeInput}
                />
              </div>

              <button onClick={handleClick}> Done </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;

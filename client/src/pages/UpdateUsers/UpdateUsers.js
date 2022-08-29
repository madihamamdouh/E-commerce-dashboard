import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestApi";
import { useLocation } from "react-router-dom";

const UpdateUser = ({ title }) => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const location = useLocation();
  const userId = location.pathname.split("/")[3];
  const changeInput = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    const newUser = { ...inputs, _id: userId };
    const handleClick = async (e) => {
      e.preventDefault();
      try {
        const res = await userRequest.put("users/" + userId, newUser);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    handleClick();
  }, []);

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
            <form className="form1">
              <div className="formInput">
                <label htmlFor="file">Image:</label>
                <input
                  type="text"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  placeholder="past you URL"
                />
              </div>

              <div className="formInput">
                <label>Product Name</label>
                <input
                  type="text"
                  name="title"
                  placeholder="product.title"
                  onChange={changeInput}
                />
              </div>
              <div className="formInput">
                <label>Product Desc</label>
                <input
                  type="text"
                  name="desc"
                  //placeholder={product.desc}
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
              <button> UPDATE </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";

const UpdateUser = ({ inputs, title }) => {
  const [file, setFile] = useState("");
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

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button> UPDATE </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;

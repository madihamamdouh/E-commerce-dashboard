import React from "react";
import { ToastContainer } from "react-toastify";

const Toast = () => {
  return (
    <div>
      <ToastContainer
        position="top-left"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      ></ToastContainer>
    </div>
  );
};
export default Toast;

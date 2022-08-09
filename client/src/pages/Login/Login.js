import "./login.css";
import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { login } from "../../ShopifyFront/authentication";

import DashContext from "../../Context/dataContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  // const { login } = useContext(DashContext);

  const handelLogin = async (e) => {
    e.preventDefault();

    try {
      const res = login({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });

      res.data && window.location.replace("/");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <>
      <div className="login">
        <form onSubmit={handelLogin}>
          <div className="lleft">
            <div className="header">
              <h2 className="animation a1">Welcome Back</h2>
              <h4 className="animation a2">
                Log in to your account using Email and password
              </h4>
            </div>
            <div className="form">
              <input
                type="text"
                className="form-field animation a3"
                placeholder="admin@email.com"
                ref={emailRef}
              />
              <input
                type="password"
                className="form-field animation a4"
                placeholder="Password"
                ref={passwordRef}
              />

              <button className="animation a6" type="submit">
                LOGIN
              </button>
            </div>
          </div>
        </form>
        <div className="lright"></div>
      </div>
    </>
  );
};

export default Login;

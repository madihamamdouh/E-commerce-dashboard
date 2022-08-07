//import axios from "axios";
//import React, { useContext, useRef } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../Redux/Actions/UserAction";
import Message from "../Error";
import Toast from "../Toast";
import axios from "axios";
//import { Context } from "../context/Context";
import "./login.css";

const Login = ({ history }) => {
  // const userRef = useRef();
  // const passwordRef = useRef();
  // const { dispatch, isFetching } = useContext(Context);

  // const handelLogin = async (e) => {
  //   e.preventDefault();
  //   dispatch({ type: "LOGIN_START" });
  //   try {
  //     const res = await axios.post("/auth/login", {
  //       username: userRef.current.value,
  //       password: passwordRef.current.value,
  //     });
  //     dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  //     res.data && window.location.replace("/");
  //   } catch (err) {
  //     dispatch({ type: "LOGIN_FAILURE" });
  //   }
  // };
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const dispatch = useDispatch();

  // const userLogin = useSelector((state) => state.userLogin);
  // const { error, isFetching, user } = userLogin;
  function getOrder() {
    const shop = "iti-ism";
    const version = "2022-07";
    const resource = "orders";
    const token = "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"; //iti-ism
    const apiKey = "f9435203660033c2fe73a34c23ffd4dd"; // iti-ism
    const passsword = "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"; //iti-ism

    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/${version}/${resource}.json`;
    return axios({
      method: "get",
      url: apiUrl,
      headers: {
        "content-type": "application/json, charset=utf-8",
        "X-Shopify-Access-Token": `${token}`,
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    });
  }
  useEffect(() => {
    getOrder()
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.respose);
      });
    // if (user) {
    //   history.push("/");
    // }
  });
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(login(email, password));
  // };
  return (
    <>
      <Toast />
      <div className="login">
        <form>
          <div className="lleft">
            <div className="header">
              <h2 className="animation a1">Welcome Back</h2>
              <h4 className="animation a2">
                Log in to your account using Username and password
              </h4>
            </div>
            <div className="form">
              <input
                type="text"
                className="form-field animation a3"
                placeholder="Username"
                // value={email}
                // onchange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="form-field animation a4"
                placeholder="Password"
                // value={password}
                // onchange={(e) => setPassword(e.target.value)}
              />
              {/* {error && <Message className="alert danger">{error}</Message>} */}
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

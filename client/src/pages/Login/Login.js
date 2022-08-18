import "./login.css";
import { useState } from "react";
import { login } from "../../Redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handelLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <>
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
                placeholder="admin"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                className="form-field animation a4"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="animation a6"
                type="button"
                onClick={handelLogin}
                disabled={isFetching}
              >
                LOGIN
              </button>
              {error ? (
                <span className="error">
                  something is wrong!.. please try again
                </span>
              ) : (
                false
              )}
            </div>
          </div>
        </form>
        <div className="lright"></div>
      </div>
    </>
  );
};

export default Login;

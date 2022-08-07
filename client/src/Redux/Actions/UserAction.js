import axios from "axios";
import { toast } from "react-toastify";

//login
export const login = (email, password) => async (dispatch) => {
  const ToastObjects = {
    pauseOnFocusloss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 200,
  };
  try {
    dispatch({ type: "LOGIN_START" });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `/api/users/login`,
      { email, password },
      config
    );
    if (!data.isAdmin) {
      toast.error("you are not Admin", ToastObjects);
      dispatch({
        type: "LOGIN_FAILURE",
      });
    } else {
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
    }

    localStorage.setItem("user", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

//logout
export const logout = (dispatch) => {
  localStorage.removeItem("user");
  dispatch({ type: "USER_LOGOUT" });
  dispatch({ type: "USERS_RESET" });
};

//users list
export const userList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: "USERS_START" });
    const {
      userLogin: { user },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${user}`,
      },
    };
    const { data } = await axios.get(`/api/users`, config);
    dispatch({ type: "USERS_SUCCESS", payload: data });

    localStorage.setItem("user", JSON.stringify(data));
  } catch (err) {
    const message = err.response && err.response.data.message;
    if (message === "Not authorised, token failed") {
      dispatch({ type: logout() });
    }
    dispatch({
      type: "USERS_FAILURE",
      payload: message,
    });
  }
};

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userListReducer, userLoginReducer } from "./Reducers/UserReducer";
import {
  productCreateReducer,
  productDeleteReducer,
  productEditReducer,
  productListReducer,
  productUpdateReducer,
} from "./Reducers/productReducer";
import {
  orderDeliveredReducer,
  orderDetailsReducer,
  orderListReducer,
} from "./Reducers/orderReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userList: userListReducer,
  productList: productListReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productEdit: productEditReducer,
  productUpdate: productUpdateReducer,
  orderList: orderListReducer,
  orderDetails: orderDetailsReducer,
  orderDeliver: orderDeliveredReducer,
});

// login
const userFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  userLogin: { userInfo: userFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

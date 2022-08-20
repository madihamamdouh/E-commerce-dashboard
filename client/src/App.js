import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
//front pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import Single from "./pages/Single/Single";
import ProductList from "./pages/productList/ProductList";
import ProductSingle from "./pages/productSingle/ProductSingle";
import Update from "./pages/update/Update";
import UpdateUser from "./pages/UpdateUsers/UpdateUsers";
import {
  productInputs,
  brandInputs,
  userInputs,
  adminInputs,
} from "./Data/formSource";
import { user, admin } from "./Data/adminUserData";

//context
import { DarkModeContext } from "./Context/darkModeContext";
import BrandList from "./pages/prandList/BrandList";
import NewUsers from "./pages/NewUsers/NewUsers";
import { useSelector } from "react-redux";
import New from "./pages/New/New";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const admin = useSelector((state) => state.user.currentUser);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* {admins && (
            <> */}
          <Route exact path="/" element={<Home />} />
          <Route path="admin">
            <Route index element={<Single users={admin} />} />
            <Route
              path="update"
              element={<UpdateUser inputs={adminInputs} title="Update Admin" />}
            />
          </Route>
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single users={user} />} />
            <Route
              path="update"
              element={<UpdateUser inputs={userInputs} title="Update User" />}
            />
          </Route>
          <Route path="products">
            <Route index element={<ProductList />} />
            <Route path=":productId" element={<ProductSingle />} />
            <Route path="new" element={<New title="Add New Product" />} />
            <Route
              path="update/:productId"
              element={
                <Update inputs={productInputs} header="Update Product" />
              }
            />
          </Route>
          <Route path="/orders" element={<Orders />} />

          <Route path="brands">
            <Route index element={<BrandList />} />
            <Route
              path="new"
              element={<Update inputs={brandInputs} title="Add New Brand" />}
            />
            <Route
              path="new"
              element={
                <Update inputs={productInputs} title="Add New Product" />
              }
            ></Route>
          </Route>
          <Route path="/newusers" element={<NewUsers />}></Route>
          {/* </>
          )} */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

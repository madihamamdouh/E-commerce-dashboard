import React, { useContext, Fragment, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./PrivateRouts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
//front pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import Single from "./pages/Single/Single";
import New from "./pages/New/New";
import ProductList from "./pages/productList/ProductList";
import ProductSingle from "./pages/productSingle/ProductSingle";
import Update from "./pages/update/Update";
import { productInputs, brandInputs } from "./Data/formSource";
import Brand from "./components/brands/Brand";
//context
import DashContext from "./Context/dataContext";
import { DarkModeContext } from "./Context/darkModeContext";
//pack
import { getCustomers } from "./ShopifyFront/customer";
import { getProducts } from "./ShopifyFront/product";
import { getOrders } from "./ShopifyFront/order";
import { getCategories } from "./ShopifyFront/category";
import BrandList from "./pages/prandList/BrandList";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [products, setProducts] = useState([]);
  const [customers, serCustomers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    /***************** request all products ****************** */
    getProducts()
      .then((res) => {
        // console.log(res.data)
        setProducts(res.data["products"]);
      })
      .catch((er) => {
        // console.log(er.response);
      });
    /************ request orders ************************/
    getOrders()
      .then((res) => {
        // console.log(res.data)
        setOrders(res.data["orders"]);
      })
      .catch((er) => {
        // console.log(er.response);
      });
    /**************** request all customers ********************/
    getCustomers()
      .then((res) => {
        // console.log(res.data)
        serCustomers(res.data["customers"]);
      })
      .catch((er) => {
        // console.log(er.response);
      });
    /*****************  request all categories ********************/
    getCategories()
      .then((res) => {
        console.log(res.data);
        setCategories(res.data);
      })
      .catch((er) => {
        console.log(er.response);
      });
  }, []);

  return (
    <DashContext.Provider value={{ products, orders, categories, customers }}>
      <div className={darkMode ? "app dark" : "app"}>
        <BrowserRouter>
          <Fragment>
            <Routes>
              <Route path="/" element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="users">
                  <Route index element={<List />} />
                  <Route path=":userId" element={<Single />} />
                </Route>
                <Route path="products">
                  <Route index element={<ProductList />} />
                  <Route path=":productId" element={<ProductSingle />} />
                  <Route
                    path="new"
                    element={
                      <Update inputs={productInputs} title="Add New Product" />
                    }
                  />
                  <Route
                    path="update"
                    element={
                      <Update inputs={productInputs} title="Update Product" />
                    }
                  />
                </Route>
                <Route path="/orders" element={<Orders />} />

                <Route path="brands">
                  <Route index element={<BrandList />} />
                  <Route
                    path="new"
                    element={
                      <Update inputs={brandInputs} title="Add New Brand" />
                    }
                  />
                  <Route
                    path="new"
                    element={
                      <Update inputs={productInputs} title="Add New Product" />
                    }
                  />
                </Route>
              </Route>
              <Route path="/login" element={<Login />} />
            </Routes>
          </Fragment>
        </BrowserRouter>
      </div>
    </DashContext.Provider>
  );
}

export default App;

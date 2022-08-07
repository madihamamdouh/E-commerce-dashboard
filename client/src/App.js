import React, { useContext, Fragment, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./PrivateRouts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import Single from "./pages/Single/Single";
import New from "./pages/New/New";
import ProductList from "./pages/productList/ProductList";
import ProductSingle from "./pages/productSingle/ProductSingle";
import Update from "./pages/update/Update";
import { productInputs, userInputs } from "./formSource";

import DashContext from "./components/dataContext";

import {getCustomers} from './ShopifyFront/customer'
import {getProducts} from './ShopifyFront/product'

//import RingLoader from "react-spinners/RingLoader";
import { DarkModeContext } from "./Context/darkModeContext";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  const[products, setProducts] = useState([]);
  
  useEffect(()=>{

    getProducts()
    .then((res)=>{
      console.log(res.data['products'])
      setProducts(res.data['products'])
    })
    .catch((er)=>{
      console.log(er.response);
    })

  }, [])

  return (
    <DashContext.Provider value={{products}}>
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route
                  path="new"
                  element={<New inputs={userInputs} title="Add New User" />}
                />
                <Route
                  path="update"
                  element={<New inputs={userInputs} title="Update User" />}
                />
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

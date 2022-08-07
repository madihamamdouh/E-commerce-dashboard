import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import DarkModeContextProvider from "./Context/darkModeContext";
import store from "./Redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </React.StrictMode>
  </Provider>
);

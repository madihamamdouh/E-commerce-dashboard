import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import DarkModeContextProvider from "./Context/darkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading="null" persistor={persistor}>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </PersistGate>
  </Provider>
);

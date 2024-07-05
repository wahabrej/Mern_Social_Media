import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for createRoot
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AuthProvider } from "./context/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);

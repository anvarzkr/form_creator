import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./pages/MainPage/MainPage";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import "normalize.css";
import "react-toastify/dist/ReactToastify.css";

// Styles
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <MainPage />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

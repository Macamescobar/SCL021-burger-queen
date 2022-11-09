import React from "react";
import ReactDOM from "react-dom/client";
//import HomePage from "./sections/Homepage/Homepage";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <AppRouter/> 
    </BrowserRouter>
  </React.StrictMode>
);


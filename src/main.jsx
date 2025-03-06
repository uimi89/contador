import React from "react";
import ReactDOM from "react-dom/client";
import { Contador } from "./contador";
import "../src/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Contador valor={0}/>
  </React.StrictMode>
);

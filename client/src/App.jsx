import { RouterProvider } from "react-router-dom";
import "./index.css"
import React from "react"
import Approuter from "./Routes/Approuter";
import ReactDOM  from 'react-dom/client';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Approuter} />
  </React.StrictMode>
);
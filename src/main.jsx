import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { EmployeeComntextProvier } from "./context/index.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EmployeeComntextProvier>
      <App />
    </EmployeeComntextProvier>
  </React.StrictMode>
);

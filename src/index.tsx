import React from "react";
import { createRoot } from "react-dom/client";
import "./ui/index.css";
import App from "./ui/pages/app/App";
import reportWebVitals from "./ui/reportWebVitals";

const container = document.getElementById("root");
if (container !== null) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Weather from "./Weather.js";
import Footer from "./Footer.js";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Weather defaultCity="Baltimor" />
    <Footer />
  </React.StrictMode>
);
reportWebVitals();

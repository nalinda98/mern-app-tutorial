import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import "animate.css/animate.min.css";
import smoothscroll from "smoothscroll-polyfill";

// Kick it off in index.js
smoothscroll.polyfill();


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

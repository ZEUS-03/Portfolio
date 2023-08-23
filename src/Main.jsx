import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import "../styles/index.css";
import "../styles/custom-css-styles.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

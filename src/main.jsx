import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CalenderContextProvider } from "./context/CalenderContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CalenderContextProvider>
    <App />
  </CalenderContextProvider>
);

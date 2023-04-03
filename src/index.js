import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MenuProvider } from "./contexts/MenuContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MenuProvider>
        <App />
    </MenuProvider>);

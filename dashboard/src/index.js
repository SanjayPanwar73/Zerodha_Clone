import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import { CookiesProvider } from "react-cookie"; // ✅ Add this

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <CookiesProvider>
    
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
          <Route path="/Dashboard" element={<Home />} />
         
      </Routes>

    </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);





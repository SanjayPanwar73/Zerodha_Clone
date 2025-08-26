
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";

import axios from "axios";
import "./SellActionWindow.css";
import { toast } from "react-toastify";


const API = import.meta.env.VITE_API_URL;


const SellActionWindow = ({uid}) => {

  const { closeSellWindow } = useContext(GeneralContext);

  const handleSellClick = () => {

  axios.get(
    // `https://zerodha-clone-fnnn.onrender.com/getStock/${uid}`
    `${API}/getStock/${uid}`
  )
    .then((res) => {
      const data = res.data;

      axios.post(
        // "https://zerodha-clone-fnnn.onrender.com/sellOrder"
        `${API}/sellOrder`
        , {
        ...data,
        mode: "SELL",
      }).then(() => {
        toast.success("Sell order placed successfully!", {
          position: "bottom-left",
        });
        closeSellWindow();
      })
    })
    .catch((err) => {
      console.error("Sell flow failed:", err);
      toast.error("Could not place sell order");
      closeSellWindow();
    });
  };
  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
            <div className="d-block align-items-center justify-content-start">
                <h2 style={{color: "red", marginTop: "0", paddingBottom: "1rem", borderBottom: "1px solid #ddd"}}>SELL STOCKS</h2>
            </div> 
        </div>
      </div>

      <div className="buttons">
        <span>Brokerage ₹0.03/stock</span>
        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";

import axios from "axios";
import "./BuyActionWindow.css";
import { toast } from "react-toastify";

const API = import.meta.env.VITE_API_URL;


const BuyActionWindow = ({ uid }) => {

  const { closeBuyWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = () => {
    axios.post(
      // "https://zerodha-clone-fnnn.onrender.com/newOrder"
      `${API}/newOrder`
      
      ,{
      name: uid,
      qty: parseInt(stockQuantity),
      price: parseFloat(stockPrice),
      mode: "BUY",
    });
    toast.success("Buy order placed successfully!", {
      position: "bottom-left",});
    closeBuyWindow();
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend className="text-black">Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css"; // ✅ same styling

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const generalCtx = useContext(GeneralContext); // ✅ proper context usage

  const handleSellClick = async () => {
    try {
      const response = await axios.post("http://localhost:8000/newSellOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
      });

      alert(response.data); // shows “Sell order saved” or “You cannot sell...” from backend
      generalCtx.closeSellWindow(); // ✅ close window after success
    } catch (err) {
      if (err.response) {
        alert(err.response.data);
      } else {
        alert("Error placing sell order.");
      }
    }
  };

  const handleCancelClick = () => {
    generalCtx.closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
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
            <legend>Price</legend>
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

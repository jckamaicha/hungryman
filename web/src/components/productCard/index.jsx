import { Button } from "@mui/material";
import React from "react";
import "./styles/style.css";

export default function ProductCard() {
  return (
    <div className="productCard__container">
      <img
        className="productImage"
        src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"
        alt=""
      />
      <div className="productDetails">
        <div className="productName">Hungryman Burger Combo</div>
        <div className="productCategories">
          <Button className="active">Chicken</Button>
          <Button>Veg</Button>
          <Button>Buff</Button>
        </div>
      </div>
    </div>
  );
}

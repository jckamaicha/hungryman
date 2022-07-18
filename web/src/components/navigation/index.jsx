import React from "react";
import "./styles/style.css";
import Food from "../../assets/burger.png";
import Drink from "../../assets/drink.png";
import Bakery from "../../assets/bakery.png";
import Cart from "../../assets/cart.png";

export default function Navigation() {
  return (
    <div className="navigation__container">
      <div className="navigations">
        <div className="items">
        <button>
          <img src={Food} alt="" />
          Food
        </button>
        <button>
          <img src={Drink} alt="" />
          Drinks
        </button>
        <button>
          <img src={Bakery} alt="" />
          Bakery
        </button>
        <button>
          <img src={Cart} alt="" />
          Cart
        </button>
        </div>
      </div>
    </div>
  );
}

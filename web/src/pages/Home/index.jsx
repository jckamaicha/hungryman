import React from "react";
import "./styles/style.css";
import { Button } from "@mui/material";
import ProductCard from "../../components/productCard";

export default function Home() {
  return (
    <div className="home__container">
      {/**
       * @section filter utils
       */}
      <div className="filterUtils">
        <div className="recentTags">
          <h4>Recent Tags</h4>
          <div className="tags">
            <Button>Party</Button>
            <Button>Family</Button>
            <Button>Desserts &amp; Cakes</Button>
            <Button>Snacks</Button>
            <Button>Energizers</Button>
            <Button>Starters</Button>
            <Button>Veggies</Button>
            <Button>Momos</Button>
            <Button>Beverages</Button>
          </div>
        </div>

        <div className="offersAndNotifications">
          <Button>
            <i className="ri-gift-line"></i> Offers{" "}
            <i className="ri-arrow-down-s-line"></i>
          </Button>
        </div>

        <div className="filters">
          <Button className="filterBtn">
            <i className="ri-filter-2-line"></i> Filter{" "}
            <i className="ri-arrow-down-s-line"></i>
          </Button>
          <div className="activeView">
            <div className="group">
              <Button className="active">
                <i className="ri-layout-grid-fill"></i>
              </Button>
              <Button>
                <i className="ri-layout-row-line"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/**
       * @section Recommended Items
       */}
      <div className="recommendedFoods">
        <h1 className="title">Have you tried these?</h1>

        <div className="foodItems">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </div>
  );
}

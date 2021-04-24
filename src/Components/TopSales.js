import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import apiGet from "./api";
import "./styles/topSales.css";

function TopSales({ displayDate }) {
  const [topSales, setTopSales] = useState([]);

  const fetchTopSales = () => {
    apiGet("top-sales")
      .then((data) => {
        setTopSales(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTopSales();
  }, []);

  return (
    <>
      <h1 className="title">Top-Sales</h1>
      <div className="top-sales">
        {topSales.length > 0 ? (
          topSales.map((topSale) => {
            return (
              <div key={topSale.id} className="sale">
                <p>
                  <span>Order: </span>
                  {topSale.orderNumber}{" "}
                </p>
                <p>
                  <span>Quantity: </span>
                  {topSale.count}{" "}
                </p>
                <p>
                  <span>Created: </span>
                  {displayDate(topSale.created_at)}
                </p>
                <hr />
              </div>
            );
          })
        ) : (
          <p className="empty">Fetching Top Sales...</p>
        )}
      </div>
      <>
        <hr />
        <p className="linkBack">
          Check out our <Link to="/products">Products</Link>.
        </p>
      </>
    </>
  );
}

export default TopSales;

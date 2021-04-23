import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import "./styles/topSales.css";

function TopSales({ displayDate }) {
  const baseUrl =
    "https://cors.bridged.cc/https://codechallenge.pikdrive.com/api/";

  const [topSales, setTopSales] = useState([]);

  const fetchTopSales = () => {
    Axios.get(baseUrl + "top-sales")
      .then((res) => {
        const data = res.data.data; //Using 2 cause they return nested objects
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
      <h1>Top-Sales</h1>
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

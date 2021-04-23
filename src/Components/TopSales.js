import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

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
    <div className="top-sales">
      <div className="displayProducts">
        <h1>Top-Sales</h1>
        {topSales.length > 0 ? (
          topSales.map((topSale) => {
            return (
              <div key={topSale.id} className="sale">
                <p>Order: {topSale.orderNumber} </p>
                <p>Quantity: {topSale.count} </p>
                <p>Created: {displayDate(topSale.created_at)}</p>
              </div>
            );
          })
        ) : (
          <p>Fetching Top Sales...</p>
        )}
        <hr />
      </div>
      <p>
        Check out our <Link to="/products">Products</Link>.
      </p>
    </div>
  );
}

export default TopSales;

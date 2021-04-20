import React, { useEffect, useState } from "react";
import Axios from "axios";

function Products() {
  const baseUrl =
    "https://cors.bridged.cc/https://codechallenge.pikdrive.com/api/"; // pesky CORS error.//"https://jsonplaceholder.typicode.com/users";
  const [products, setProducts] = useState([]);
  const [displayItems, setDisplayItems] = useState("orders");

  useEffect(() => {
    setProducts([]); // Loading effect.

    Axios.get(baseUrl + displayItems)
      .then((res) => {
        const data = res.data.data; //Using 2 cause they return nested objects
        console.log(res);
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [displayItems]);

  const flipDisplayItems = () => {
    displayItems === "orders"
      ? setDisplayItems("top-sales")
      : setDisplayItems("orders");
  };

  const populated = products.length; // Display loading

  return (
    <div>
      <h1>{displayItems}</h1>
      {populated ? (
        products.map((item) => {
          return <p key={item.id}>{item.orderNumber}</p>;
        })
      ) : (
        <p>Fetching {displayItems}...</p>
      )}
      {displayItems === "orders" ? (
        <button onClick={flipDisplayItems}>Fetch Top-Sales</button>
      ) : (
        <button onClick={flipDisplayItems}>Fetch Orders</button>
      )}
      <p>New Product.</p>
    </div>
  );
}

export default Products;

import React, { useEffect, useState } from "react";
import Axios from "axios";

function Products() {
  const baseUrl =
    "https://cors.bridged.cc/https://codechallenge.pikdrive.com/api/"; // pesky CORS error.//"https://jsonplaceholder.typicode.com/users";
  const [products, setProducts] = useState([]);
  const [displayItems, setDisplayItems] = useState("products");

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
    displayItems === "products"
      ? setDisplayItems("top-sales")
      : setDisplayItems("products");
  };

  const populated = products.length; // Display loading

  return (
    <div>
      <h1>{displayItems}</h1>
      <ul>
        {populated ? (
          displayItems === "products" ? (
            products.map((product) => {
              return (
                <li key={product.id}>
                  {product.name} | {product.description} | {product.quantity}
                </li>
              );
            })
          ) : (
            products.map((topSale) => {
              return (
                <li key={topSale.id}>
                  {topSale.orderNumber} | {topSale.count}
                </li>
              );
            })
          )
        ) : (
          <p>Fetching {displayItems}...</p>
        )}
      </ul>
      {displayItems === "products" ? (
        <button onClick={flipDisplayItems}>Fetch Top-Sales</button>
      ) : (
        <button onClick={flipDisplayItems}>Fetch Products</button>
      )}
      <p>New Product.</p>
    </div>
  );
}

export default Products;

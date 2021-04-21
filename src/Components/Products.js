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

  const displayDate = (date) => {
    const createdDate = new Date(date);
    return createdDate.toDateString();
  };
  const populated = products.length; // Display loading
  return (
    <div className="products">
      <h1>{displayItems}</h1>
      {populated ? (
        displayItems === "products" ? (
          products.map((product) => {
            return (
              <div key={product.id}>
                <p> Name: {product.name} </p>
                <p> Description: {product.description} </p>
                <p> Quantity: {product.quantity} </p>
                <p> Created: {displayDate(product.created_at)} </p>
              </div>
            );
          })
        ) : (
          products.map((topSale) => {
            return (
              <div key={topSale.id}>
                <p>Order: {topSale.orderNumber} </p>
                <p>Quantity: {topSale.count} </p>
                <p>Created: {displayDate(topSale.created_at)}</p>
              </div>
            );
          })
        )
      ) : (
        <p>Fetching {displayItems}...</p>
      )}
      {displayItems === "products" ? (
        <button onClick={flipDisplayItems}>Fetch Top-Sales</button>
      ) : (
        <button onClick={flipDisplayItems}>Fetch Products</button>
      )}
      <hr />
      <p>New Product.</p>
    </div>
  );
}

export default Products;

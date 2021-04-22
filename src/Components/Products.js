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

  const handleNewProduct = (e) => {
    e.preventDefault();

    const productName = document.querySelector("#productName");
    const productDescription = document.querySelector("#productDescription");
    const productQuantity = document.querySelector("#productQuantity");

    Axios.post(baseUrl + "new-product", {
      name: productName.value,
      description: productDescription.value,
      quantity: productQuantity.value,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const populated = products.length; // Display loading
  return (
    <div className="products">
      <div className="displayProducts">
        <h1>{displayItems}</h1>
        {populated ? (
          displayItems === "products" ? (
            products.map((product) => {
              return (
                <div key={product.id} className="product">
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
                <div key={topSale.id} className="sale">
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
      </div>
      <div className="newProduct">
        <form action="#" onSubmit={handleNewProduct}>
          <label htmlFor="productName">Name: </label>
          <input type="text" name="productName" id="productName" />

          <label htmlFor="productDescription">Description: </label>
          <input
            type="text"
            name="productDescription"
            id="productDescription"
          />

          <label htmlFor="productQuantity">Quantity: </label>
          <input type="text" name="productQuantity" id="productQuantity" />

          <button type="submit">Create New Product</button>
        </form>
      </div>
    </div>
  );
}

export default Products;

import React from "react";
import Axios from "axios";

// Click on order, adds to cart.
function MakeProduct({ setProducts, fetchItems }) {
  const baseUrl =
    "https://cors.bridged.cc/https://codechallenge.pikdrive.com/api/";

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
        setProducts([]);
        fetchItems("products");
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    // Reset Input Fields
    productName.value = "";
    productDescription.value = "";
    productQuantity.value = "";
  };

  return (
    <div className="newProduct">
      <form action="#" onSubmit={handleNewProduct}>
        <label htmlFor="productName">Name: </label>
        <input type="text" name="productName" id="productName" />

        <label htmlFor="productDescription">Description: </label>
        <input type="text" name="productDescription" id="productDescription" />

        <label htmlFor="productQuantity">Quantity: </label>
        <input type="number" name="productQuantity" id="productQuantity" />

        <button type="submit">Create New Product</button>
      </form>
    </div>
  );
}

export default MakeProduct;

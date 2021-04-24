import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MakeProduct from "./MakeProduct";

import apiGet from "./api";
import "./styles/products.css";

function Products({ cart, displayDate }) {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    apiGet("products").then((products) => {
      setProducts(products);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleOrder = (itemID, itemName) => {
    // TODO: Check whether item is already there.
    let itemPresent = false;
    cart.forEach((item) => {
      if (item.id === itemID) {
        item.quantity++; // Increment quantity
        itemPresent = true;
      }
    });

    if (!itemPresent) {
      cart.push({
        id: itemID,
        name: itemName,
        quantity: 1,
      });
    }
  };

  const alertOrder = (itemName) => {
    const products = document.querySelector(".products");
    const cart = document.createElement("p");
    products.appendChild(cart);
    cart.innerText = `Added ${itemName} to cart`;
    cart.classList.add("cartAlert");
    cart.style.display = "block";
    setTimeout(() => {
      cart.style.display = "none";
    }, 1500);
  };

  return (
    <>
      <h1 className="title">Products</h1>
      <div className="products">
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <div key={product.id} className="product">
                <section className=" text">
                  <p>
                    <span>Name: </span>
                    {product.name}
                  </p>
                  <p>
                    <span>Description: </span>
                    {product.description}
                  </p>
                  <p>
                    <span>Quantity: </span>
                    {product.quantity}
                  </p>
                  <p>
                    <span>Created: </span>
                    {displayDate(product.created_at)}
                  </p>
                </section>
                <section>
                  <button
                    className="orderButton"
                    onClick={() => {
                      handleOrder(product.id, product.name);
                      alertOrder(product.name);
                    }}
                  >
                    Add To Cart
                  </button>
                </section>
              </div>
            );
          })
        ) : (
          <p className="empty">Fetching Products...</p>
        )}
      </div>

      <p className="plug">
        Check out our <Link to="/top-sales">Top-Sales</Link>.
      </p>

      <hr />
      <MakeProduct setProducts={setProducts} fetchProducts={fetchProducts} />
    </>
  );
}

export default Products;

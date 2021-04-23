import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import MakeProduct from "./MakeProduct";

import "./styles/products.css";

function Products({ cart, displayDate }) {
  const baseUrl =
    "https://cors.bridged.cc/https://codechallenge.pikdrive.com/api/"; // pesky CORS error.//"https://jsonplaceholder.typicode.com/users";
  const [products, setProducts] = useState([]);
  const displayItems = "products";

  const fetchItems = (displayItems) => {
    Axios.get(baseUrl + displayItems)
      .then((res) => {
        const data = res.data.data; //Using 2 cause they return nested objects
        console.log(res);
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchItems(displayItems);
  }, [displayItems]);

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

    console.table(cart);
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
      <MakeProduct setProducts={setProducts} fetchItems={fetchItems} />
    </>
  );
}

export default Products;

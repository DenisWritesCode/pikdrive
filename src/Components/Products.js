import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import MakeProduct from "./MakeProduct";

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
    <div className="products">
      <div className="displayProducts">
        <h1>Products</h1>
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <div key={product.id} className="product">
                <p> Name: {product.name} </p>
                <p> Description: {product.description} </p>
                <p> Quantity: {product.quantity} </p>
                <p> Created: {displayDate(product.created_at)} </p>
                <button
                  onClick={() => {
                    handleOrder(product.id, product.name);
                  }}
                >
                  Order {product.name}
                </button>
                <hr />
              </div>
            );
          })
        ) : (
          <p>Fetching Products...</p>
        )}

        <p>
          Check out our <Link to="/top-sales">Top-Sales</Link>.
        </p>

        <hr />
        <MakeProduct setProducts={setProducts} fetchItems={fetchItems} />
      </div>
    </div>
  );
}

export default Products;

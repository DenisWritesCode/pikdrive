import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {
  const baseUrl =
    "https://cors.bridged.cc/https://codechallenge.pikdrive.com/api/";

  const [checkoutCart, setCheckOutCart] = useState(cart);
  // Determine number of items in cart
  const sum = (acc, element) => {
    return acc + element.quantity;
  };

  const totalItems = checkoutCart.reduce(sum, 0);

  const handleCheckout = () => {
    Axios.post(baseUrl + "new-order", {
      items: cart, // Change this maybe
    })
      .then((res) => {
        console.log(res);
        setCart([]);
        setCheckOutCart([]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="cart-parent">
      {totalItems > 0 ? (
        <div className="cart">
          {checkoutCart.map((item) => {
            return (
              <div className="item" key={item.id}>
                <p>Product: {item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <hr />
              </div>
            );
          })}
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      ) : (
        <>
          <p>Your cart is currently empty...</p>
          <p>
            Go back to <Link to="/products">Products</Link> to shop.
          </p>
        </>
      )}
    </div>
  );
}

export default Cart;

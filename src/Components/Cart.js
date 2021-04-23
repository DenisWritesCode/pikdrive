function Cart({ displayDate, cart }) {
  const sum = (acc, element) => {
    console.log(element);
    return acc + element.quantity;
  };

  const totalItems = cart.reduce(sum, 0);

  return (
    <div>
      {totalItems ? (
        <p>{totalItems}</p>
      ) : (
        <p>Your cart is currently empty...</p>
      )}
    </div>
  );
}

export default Cart;

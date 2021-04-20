import React, { useEffect, useState } from "react";
import Axios from "axios";

function Orders() {
  const baseUrl =
    "https://cors.bridged.cc/https://codechallenge.pikdrive.com/api/"; // pesky CORS error.//"https://jsonplaceholder.typicode.com/users";
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders([]); // Loading effect.

    Axios.get(baseUrl + "orders/")
      .then((res) => {
        const data = res.data.data; //Using 2 cause they return nested objects
        console.log(res);
        setOrders(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const populated = orders.length; // Display loading
  return (
    <div>
      <ul>
        {populated ? (
          orders.map((order) => {
            return (
              <li key={order.id}>
                Order Number: {order.orderNumber} | No. of items: {order.count}
              </li>
            );
          })
        ) : (
          <p>Loading Orders ...</p>
        )}
      </ul>
      <p>Create New Order</p>
      <p>Delete Order</p>
    </div>
  );
}

export default Orders;

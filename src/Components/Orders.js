import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./styles/orders.css";
import MakeOrder from "./MakeOrder";

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

  const displayDate = (date) => {
    const createdDate = new Date(date);
    return createdDate.toDateString();
  };

  const populated = orders.length; // Display loading
  return (
    <div className="orders">
      {populated ? (
        orders.map((order) => {
          return (
            <div key={order.id} className="order">
              <p>Order: {order.orderNumber}</p>
              <p>No. of items: {order.count}</p>
              <p>Created on: {displayDate(order.created_at)}</p>
            </div>
          );
        })
      ) : (
        <p>Loading Orders ...</p>
      )}
      <hr />
      <MakeOrder />
      <p>Delete Order</p>
    </div>
  );
}

export default Orders;

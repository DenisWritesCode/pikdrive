import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./styles/orders.css";

function Orders() {
  const baseUrl =
    "https://cors.bridged.cc/https://codechallenge.pikdrive.com/api/"; // pesky CORS error.//"https://jsonplaceholder.typicode.com/users";
  const [orders, setOrders] = useState([]);

  const fetchOrders = () => {
    Axios.get(baseUrl + "orders")
      .then((res) => {
        const data = res.data.data; //Using 2 cause they return nested objects
        setOrders(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const displayDate = (date) => {
    const createdDate = new Date(date);
    return createdDate.toDateString();
  };

  const handleOrderDelete = (itemID) => {
    Axios.post(baseUrl + "delete-order", {
      id: itemID,
    })
      .then((res) => {
        setOrders([]);
        fetchOrders(); // Trigger a page refresh
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="orders">
      {orders.length > 0 ? (
        orders.map((order) => {
          return (
            <div key={order.id} className="order">
              <p>Order: {order.orderNumber}</p>
              <p>No. of items: {order.count}</p>
              <p>Created on: {displayDate(order.created_at)}</p>

              <i
                onClick={() => {
                  handleOrderDelete(order.id);
                }}
                className="fas fa-trash"
              ></i>
            </div>
          );
        })
      ) : (
        <p>Loading Orders ...</p>
      )}
    </div>
  );
}

export default Orders;

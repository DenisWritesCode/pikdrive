import React, { useEffect, useState } from "react";
import "./styles/orders.css";

import apiGet, { apiPost } from "./api";

function Orders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = () => {
    apiGet("orders").then((orders) => {
      setOrders(orders);
    });
  };

  const handleOrderDelete = (id) => {
    apiPost("delete-order", { id })
      .then((res) => {
        setOrders([]);
        fetchOrders(); // Trigger a page refresh
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const displayDate = (date) => {
    const createdDate = new Date(date);
    return createdDate.toDateString();
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="orders">
      {orders.length > 0 ? (
        orders.map((order) => {
          return (
            <div key={order.id} className="order">
              <section className="text">
                <p>
                  <span>Order:</span> {order.orderNumber}
                </p>
                <p>
                  <span>No. of items:</span> {order.count}
                </p>
                <p>
                  <span>Created on:</span> {displayDate(order.created_at)}
                </p>
              </section>
              <section>
                <button
                  className="delete"
                  onClick={() => {
                    handleOrderDelete(order.id);
                    alert(`Confirm Deletion of ${order.orderNumber}`);
                  }}
                >
                  Delete
                  <i className="fas fa-trash"></i>
                </button>
              </section>
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

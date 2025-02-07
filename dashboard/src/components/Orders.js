import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const { nanoid } = require('nanoid');


const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://zerodha-backend-htqa.onrender.com/orders")
      .then(response => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching orders: {error.message}</p>;
  }

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <ul className="order-list">
          {orders.map(order => (
            <li className="order-item" key={order.id}>
              <p className="order-id">Order ID: {nanoid()}</p>
              <p className="order-name">Name: {order.name}</p>
              <p className="order-details">Quantity: {order.qty}</p>
              <p className="price">Price: {order.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;

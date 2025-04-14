import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h3 className="text-3xl font-semibold mb-6 text-gray-800">Orders</h3>
      <div className="grid gap-6">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row gap-6"
          >
            <img
              src={assets.parcel_icon}
              alt="Parcel"
              className="w-20 h-20 object-contain"
            />
            <div className="flex-1 space-y-3">
              <div className="text-sm text-gray-700">
                {order.items.map((item, idx) => (
                  <p key={idx}>
                    {item.name} x {item.quantity}{" "}
                    <span className="text-xs text-gray-500">({item.size})</span>
                    {idx !== order.items.length - 1 && <span>,</span>}
                  </p>
                ))}
              </div>
              <div>
                <p className="font-semibold text-gray-800">
                  {order.address.firstName} {order.address.lastName}
                </p>
                <p className="text-gray-600">{order.address.street},</p>
                <p className="text-gray-600">
                  {order.address.city}, {order.address.state},{" "}
                  {order.address.country} - {order.address.zipcode}
                </p>
                <p className="text-gray-600">📞 {order.address.phone}</p>
              </div>
            </div>

            <div className="flex flex-col justify-between text-sm text-gray-700 space-y-2">
              <p>🧾 Items: {order.items.length}</p>
              <p>💳 Method: {order.paymentMethod}</p>
              <p>
                🧾 Payment:{" "}
                <span
                  className={`font-semibold ${
                    order.payment ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {order.payment ? "Done" : "Pending"}
                </span>
              </p>
              <p>📅 Date: {new Date(order.date).toLocaleDateString()}</p>
              <p className="font-semibold">
                💰 {currency}
                {order.amount}
              </p>
              <select
                onChange={(event) => statusHandler(event, order._id)}
                value={order.status || "Order Placed"}
                className="mt-2 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

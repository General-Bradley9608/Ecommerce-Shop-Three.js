import { useEffect, useState } from 'react';
import './AdminProductList.css';
import axios from 'axios';

export default function AdminProductList() {
  
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3001/orders');
        setOrders(response.data.orders);
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchOrders();
  }, []);

  return (
    <div className="admin-orders">
      <h1>Admin - Orders Received</h1>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Order Cost</th>
            <th>Address</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.email}>
              <td>{order.fullname}</td>
              <td>{order.email}</td>
              <td>
                {order.items.map((item) => (
                  <div key={item.ID}>
                    {item.name}
                  </div>
                ))}
              </td>
              <td>
                {order.items.map((item) => (
                  <div key={item.ID}>
                    {item.quantity}
                  </div>
                ))}
              </td>
              <td>
                {order.items.reduce((total, item) => total + item.price * item.quantity, 0)}
              </td>
              <td>{order.homeaddress}</td>
              <td>{order.contactnumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

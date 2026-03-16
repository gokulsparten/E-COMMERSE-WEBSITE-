import React, { useEffect, useState } from "react";
import "../styles/Checkout.css";
import { useNavigate } from "react-router-dom";

function Success() {

  const [order, setOrder] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem("order"));
    if (savedOrder) {
      setOrder(savedOrder);
    }
  }, []);

  if (!order) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="checkout-container">

      <h2 className="checkout-title">🎉 Payment Successful!</h2>

      <p><strong>Transaction ID:</strong> {order.transactionId}</p>
      <p><strong>Payment Method:</strong> {order.paymentMethod.toUpperCase()}</p>

      <h3 style={{marginTop:"20px"}}>Order Summary</h3>

      {order.items.map((item, index) => (
        <div key={index} className="checkout-item">
          <span>{item.title}</span>
          <span>₹{item.price}</span>
        </div>
      ))}

      <h2 className="checkout-total">
        Total Paid: ₹{order.total}
      </h2>

      <button className="continue-btn" onClick={() => navigate("/")} >Continue Shopping</button>

    </div>
  );
}

export default Success;
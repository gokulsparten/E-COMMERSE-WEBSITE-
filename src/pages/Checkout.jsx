import "../styles/Checkout.css";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cartItems = [] }) {
  const navigate = useNavigate();
 
  const [address, setAddress] = useState({
  name: "",
  phone: "",
  address: "",
  city: "",
  pincode: ""
});

const [paymentMethod, setPaymentMethod] = useState("cod");

 useEffect(() => {
  const savedAddress = JSON.parse(localStorage.getItem("address"));
  if (savedAddress) {
    setAddress(savedAddress);
  }
}, []);

const handlePayment = () => {

  if (!address.name || !address.phone || !address.address || !address.city || !address.pincode) {
    alert("Please fill all address fields");
    return;
  }
  if (paymentMethod === "upi") {
    window.location.href = upiLink;
    return;
  }
  // Generate Fake Transaction ID
  const transactionId = "TXN" + Math.floor(Math.random() * 1000000000);

  const orderData = {
    items: cartItems,
    total: total,
    paymentMethod: paymentMethod,
    transactionId: transactionId
  };

  localStorage.setItem("order", JSON.stringify(orderData));
  localStorage.removeItem("cart");

  navigate("/success");
};

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  //const total = 1;

  const upiID = "gokulsparten4701@oksbi";
  const upiLink = `upi://pay?pa=${upiID}&pn=Gokul&am=${total}&cu=INR`;


  return (
    <div className="checkout-container">
  <h2 className="checkout-title">Checkout</h2>

  {cartItems.map((item, index) => (
    <div key={index} className="checkout-item">
      <span>{item.title}</span>
      <span>₹{item.price}</span>
    </div>
  ))}
  <div className="address-section">
  <h3>Shipping Address</h3>

  <input
  type="text"
  placeholder="Full Name"
  value={address.name}
  onChange={(e) =>
    setAddress({ ...address, name: e.target.value })
  }
/>

<input
  type="text"
  placeholder="Phone Number"
  value={address.phone}
  onChange={(e) =>
    setAddress({ ...address, phone: e.target.value })
  }
/>

<input
  type="text"
  placeholder="Address"
  value={address.address}
  onChange={(e) =>
    setAddress({ ...address, address: e.target.value })
  }
/>

<input
  type="text"
  placeholder="City"
  value={address.city}
  onChange={(e) =>
    setAddress({ ...address, city: e.target.value })
  }
/>

<input
  type="text"
  placeholder="Pincode"
  value={address.pincode}
  onChange={(e) =>
    setAddress({ ...address, pincode: e.target.value })
  }
/>
</div>
<button
  className="save-address-btn"
  onClick={() => {
    localStorage.setItem("address", JSON.stringify(address));
    alert("Address Saved Successfully ✅");
  }}
>
  Save Address
</button>

<div className="payment-section">
  <h3>Select Payment Method</h3>

  <label>
    <input
      type="radio"
      value="cod"
      checked={paymentMethod === "cod"}
      onChange={(e) => setPaymentMethod(e.target.value)}
    />
    Cash on Delivery
  </label>

  <label>
    <input
      type="radio"
      value="upi"
      checked={paymentMethod === "upi"}
      onChange={(e) => setPaymentMethod(e.target.value)}
    />
    UPI / QR Code
  </label>
</div>

{paymentMethod === "upi" && (
  <div className="qr-section">
    <h4>Scan & Pay</h4>
   <img
  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiLink)}`}
  alt="QR Code"
/>
    <p>UPI ID: {upiID}</p>
  </div>
)}

  <h3 className="checkout-total">Total: ₹{total}</h3>

  <button className="pay-btn" onClick={handlePayment}>Pay Now</button>
</div>
  );
}

export default Checkout;
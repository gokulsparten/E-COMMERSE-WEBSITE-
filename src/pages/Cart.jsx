import "../styles/Cart.css";
import { Navigate, useNavigate } from "react-router-dom";
function Cart({ cartItems, setCartItems }) {

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 0
    
  );

  const removeItem = (index) => {
    const updated = cartItems.filter((_, i) => i !== index);
    setCartItems(updated);
  };

  const increaseQty = (index) => {
  const updated = [...cartItems];
  updated[index].quantity += 1;
  setCartItems(updated);
};

const decreaseQty = (index) => {
  const updated = [...cartItems];

  if (updated[index].quantity > 1) {
    updated[index].quantity -= 1;
    setCartItems(updated);
  }
};
const Navigate = useNavigate();

  return (
  
  <div className="cart-wrapper">

    <div className="cart-left">
      <h1 className="cart-title">🛒 Your Cart</h1>

      {cartItems.length === 0 && (
        <p className="empty-cart">Your Cart is empty</p>
      )}

      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">

          <div className="cart-details">
            <h3>{item.title}</h3>
            <p>₹{item.price}</p>

            <div className="qty-section">
              <button onClick={() => decreaseQty(index)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(index)}>+</button>
            </div>
          </div>

          <button
            onClick={() => removeItem(index)}
            className="remove-btn"
          >
            Remove
          </button>

        </div>
      ))}
    </div>

    <div className="cart-right">
      <h2 className="cart-total">Total: ₹{totalPrice}</h2>
      <button className="checkout-btn" onClick={ () => Navigate("/checkout")}>
        Proceed To Checkout
      </button>
    </div>

  </div>
);
}

export default Cart;
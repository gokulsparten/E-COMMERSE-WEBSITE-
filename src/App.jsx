import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Sale from "./pages/Sale";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import SignUp from "./pages/SignUP";


function App() {
  const [cartItems, setCartItems] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}, [cartItems]);

  return (
    <>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home setCartItems={setCartItems} />} />
        <Route path="/men" element={<Men setCartItems={setCartItems}/>} />
        <Route path="/women" element={<Women setCartItems={setCartItems} />} />
        <Route path="/sale" element={<Sale setCartItems={setCartItems}/>} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart"
          element={<Cart cartItems={cartItems}
             setCartItems={setCartItems}  /> }
      />
        <Route path="/checkout"
         element={<Checkout cartItems={cartItems} /> }
        />

        
        <Route path="/success"
        element={<Success /> }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>}/>
        

      </Routes>
    </>
  );
}

export default App;
import { useState } from "react";
import "../styles/ProductCard.css";
import { useNavigate } from "react-router-dom";


function ProductCard({ product, addToCart }) {

  const navigate = useNavigate();
  const[added, setAdded] = useState(false);
  if (!product) return null;

  
  

  return (
    <div 
      className="card" 
      onClick={() =>  navigate(`/product/${product.id}`)}
    >
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>₹ {product.price}</p>

      <button
  onClick={(e) => {
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  }}
>
  {added ? "Added ✅" : "Add to Cart"}
</button>
    </div>
  );
}

export default ProductCard;
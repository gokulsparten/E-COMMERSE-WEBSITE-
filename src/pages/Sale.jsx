import products from "../data/Products";
import ProductCard from "../components/ProductCard";
import "../styles/Sale.css";

function Sale({ setCartItems }) {

  const saleProducts = products.filter(
    (product) => product.sale === true
  );

  return (
    <div className="sale-container">
      <h1> Sale Collection </h1>

      <div className="sale-grid">
        {saleProducts.map((item) => (
          <ProductCard 
            key={item.id}
            product={item}
            addToCart={(product) =>{setCartItems((prev) => [...prev,product]);
            }}
          />
        ))}
        </div>
    </div>
  );
}

export default Sale;
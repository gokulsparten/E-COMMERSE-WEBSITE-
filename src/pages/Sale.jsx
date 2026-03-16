import products from "../data/Products";
import ProductCard from "../components/ProductCard";
import "../styles/Sale.css";

function Sale({ addToCart }) {

  const saleProducts = products.filter(
    (product) => product.sale === true
  );

  return (
    <div className="sale-container">
      <h1>🔥 Sale Collection</h1>

      <div className="sale-grid">
        {saleProducts.map((item) => (
          <ProductCard 
            key={item.id}
            product={item}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Sale;
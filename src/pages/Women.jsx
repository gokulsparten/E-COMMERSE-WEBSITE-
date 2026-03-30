import products from "../data/Products";
import ProductCard from "../components/ProductCard";
import "../styles/Women.css";

function Women({ setCartItems }) {

  const womenProducts = products.filter(
    (product) => product.category === "women"
  );

  const dresses = womenProducts.filter(p => p.type === "dress");
const jeans = womenProducts.filter(p => p.type === "jeans");
const sarees = womenProducts.filter(p => p.type === "Sarees");


 const addToCart = (product) => {
  setCartItems(prevItems => {
    const existingItem = prevItems.find(
      item => item.id === product.id
    );

    if (existingItem) {
      return prevItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [...prevItems, { ...product, quantity: 1 }];
    }
  });
};

 return (
  <div className="women-container">
    <h1>Women Collection</h1>

    {/* Dresses */}
    <h2>Dresses</h2>
    <div className="women-grid">
      {dresses.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>

    {/* Jeans */}
    <h2>Jeans</h2>
    <div className="women-grid">
      {jeans.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>

    {/* Tops */}
    <h2>Sarees</h2>
    <div className="women-grid">
      {sarees.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>

  </div>
);
}

export default Women;
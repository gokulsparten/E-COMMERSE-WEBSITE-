import products from "../data/Products";
import ProductCard from "../components/ProductCard";
import "../styles/Men.css";

function Men({ setCartItems }) {

  const menProducts = products.filter(p => p.category === "men");

  const shirts = menProducts.filter(p => p.type === "shirt");
  const jeans = menProducts.filter(p => p.type === "jeans");
  const tshirts = menProducts.filter(p => p.type === "tshirt");
  const hoodies = menProducts.filter(p => p.type === "hoodie");

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
    <div className="men-container">
      <h1>Men Collection</h1>

      <Section title="Shirts" items={shirts} addToCart={addToCart} />
      <Section title="Jeans" items={jeans} addToCart={addToCart} />
      <Section title="T-Shirts" items={tshirts} addToCart={addToCart} />
      <Section title="Hoodies" items={hoodies} addToCart={addToCart} />
    </div>
  );
}

function Section({ title, items, addToCart }) {
  if (items.length === 0) return null;

  return (
    <>
      <h2 className="section-title">{title}</h2>
      <div className="men-grid">
        {items.map(item => (
          <ProductCard
            key={item.id}
            product={item}
            addToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
}

export default Men;
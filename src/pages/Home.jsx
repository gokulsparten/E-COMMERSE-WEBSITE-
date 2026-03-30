import ProductCard from "../components/ProductCard";
import "../styles/Home.css";


function Home( { setCartItems }) {
  return (
    <div className="home">
      <div className="hero">
        <h1>NEW COLLECTION 2026</h1>
        <p>Discover the latest fashion trends</p>
        <button>Shop Now</button>
      </div>

      <div className="products-section">
        <h2>Trending Now</h2>

        <div className="products-grid">
         <ProductCard
           product={{
            id: 1,
            image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
            title: "Men Jacket",
            price: 2999
          }}
           addToCart={(product) =>
           setCartItems((prev) => [...prev, product])
          }
         />

         <ProductCard
           product={{
           id: 2,
           image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
           title: "Women Dress",
           price: 1999
          }}
           addToCart={(product) =>
           setCartItems((prev) => [...prev, product])
          }
          />

          <ProductCard
           product={{
           id: 3,
           image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
           title: "Casual TShirt",
           price: 1499
           }}
           addToCart={(product) =>
          setCartItems((prev) => [...prev, product])
           }
          />
        </div>
      </div>
      <div className="products-section">
  <h2>New Arrivals</h2>

  <div className="products-grid">

   <ProductCard
product={{
  id: 4,
  image: "https://images.unsplash.com/photo-1516826957135-700dedea698c",
  title: "Men Hoodie",
  price: 1799
}}
addToCart={(product) =>
  setCartItems((prev) => [...prev, product])
}
/>

<ProductCard
product={{
  id: 5,
  image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  title: "Women Jacket",
  price: 2499
}}
addToCart={(product) =>
  setCartItems((prev) => [...prev, product])
}
/>

<ProductCard
product={{
  id: 6,
  image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
  title: "Denim Jean",
  price: 1999
}}
addToCart={(product) =>
  setCartItems((prev) => [...prev, product])
}
/>

  </div>
</div>
    </div>
  );
}

export default Home;
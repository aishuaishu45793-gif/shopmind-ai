import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import CategoryPage from "./pages/Category/CategoryPage";

import products from "./data/products";

import "./components/Navbar/Navbar.css";
import "./styles/globals.css";

function App() {
  const womenProducts = products.filter(
    (product) => product.category === "Women",
  );

  const menProducts = products.filter((product) => product.category === "Men");

  const dressProducts = products.filter(
    (product) => product.subcategory === "Dresses",
  );

  const accessoryProducts = products.filter(
    (product) => product.category === "Accessories",
  );

  const dealProducts = products.filter((product) => product.discount >= 45);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* 1 HOME */}

        <Route path="/" element={<Home />} />

        {/* 2 SHOP */}

        <Route path="/shop" element={<Shop />} />

        {/* 3 WOMEN */}

        <Route
          path="/women"
          element={
            <CategoryPage
              title="Women's Fashion"
              subtitle="Discover your next favourite look."
              products={womenProducts}
            />
          }
        />

        {/* 4 MEN */}

        <Route
          path="/men"
          element={
            <CategoryPage
              title="Men's Fashion"
              subtitle="Smart, casual and everyday styles."
              products={menProducts}
            />
          }
        />

        {/* 5 DRESSES */}

        <Route
          path="/category/dresses"
          element={
            <CategoryPage
              title="Dresses"
              subtitle="Elegant dresses for every occasion."
              products={dressProducts}
            />
          }
        />

        {/* 6 ACCESSORIES */}

        <Route
          path="/category/accessories"
          element={
            <CategoryPage
              title="Accessories"
              subtitle="Complete your look with Aishu Fashions."
              products={accessoryProducts}
            />
          }
        />

        {/* 7 DEALS */}

        <Route
          path="/deals"
          element={
            <CategoryPage
              title="🔥 Mega Deals"
              subtitle="Amazing styles at amazing prices."
              products={dealProducts}
            />
          }
        />

        {/* 8 TRENDING */}

        <Route
          path="/trending"
          element={
            <CategoryPage
              title="📈 Trending Now"
              subtitle="Styles shoppers are loving right now."
              products={products.slice(0, 8)}
            />
          }
        />

        {/* 9 PRODUCT */}

        <Route path="/product/:id" element={<ProductDetails />} />

        {/* 10 AI */}

        <Route path="/ai-assistant" element={<AIAssistant />} />

        {/* 11 WISHLIST */}

        <Route
          path="/wishlist"
          element={<SimplePage title="❤️ My Wishlist" />}
        />

        {/* 12 CART */}

        <Route path="/cart" element={<SimplePage title="🛒 Shopping Cart" />} />

        {/* 13 ACCOUNT */}

        <Route path="/account" element={<SimplePage title="👤 My Account" />} />
      </Routes>
    </BrowserRouter>
  );
}

function SimplePage({ title }) {
  return (
    <main
      style={{
        minHeight: "70vh",
        padding: "100px 30px",
        textAlign: "center",
      }}
    >
      <h1>{title}</h1>

      <p
        style={{
          marginTop: "15px",
          color: "#6b7280",
        }}
      >
        Aishu Fashions
      </p>
    </main>
  );
}

function ProductDetails() {
  return (
    <main
      style={{
        minHeight: "70vh",
        padding: "100px 30px",
        textAlign: "center",
      }}
    >
      <h1>Product Details</h1>

      <p>Product information will appear here.</p>
    </main>
  );
}

function AIAssistant() {
  return (
    <main
      style={{
        minHeight: "70vh",
        padding: "100px 30px",
        textAlign: "center",
      }}
    >
      <h1>✨ ShopMind AI Assistant</h1>

      <p>Your personal fashion shopping assistant.</p>
    </main>
  );
}

export default App;

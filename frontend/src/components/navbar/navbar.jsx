import { useState } from "react";
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <span className="logo-mark">S</span>

          <span>
            <strong>Aishu fashions</strong>
            <small>AI</small>
          </span>
        </a>

        <nav className="desktop-nav">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>

          <a href="/products/women" className="nav-dropdown">
            Women
            <ChevronDown size={15} />
          </a>

          <a href="/products/men" className="nav-dropdown">
            Men
            <ChevronDown size={15} />
          </a>

          <a href="/deals">Deals</a>
          <a href="/trending">Trending</a>

          <a href="/ai-predictor" className="ai-nav">
            ✨ AI
          </a>
        </nav>

        <div className="navbar-search">
          <Search size={19} />

          <input
            type="text"
            placeholder="Search products, brands and more..."
          />
        </div>

        <div className="navbar-actions">
          <button className="icon-button" title="Wishlist">
            <Heart size={21} />
          </button>

          <button className="icon-button cart-button" title="Cart">
            <ShoppingBag size={21} />
            <span className="cart-count">0</span>
          </button>

          <button className="icon-button" title="Account">
            <User size={21} />
          </button>

          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenu && (
        <div className="mobile-nav">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/products/women">Women</a>
          <a href="/products/men">Men</a>
          <a href="/deals">Deals</a>
          <a href="/trending">Trending</a>
          <a href="/ai-predictor">✨ AI Purchase Predictor</a>
        </div>
      )}
    </header>
  );
}

export default Navbar;

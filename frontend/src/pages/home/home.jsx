import {
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Truck,
  ShieldCheck,
  RefreshCcw,
  MessageCircle,
  Heart,
  Star,
  ChevronRight,
} from "lucide-react";

import "./Home.css";

function Home() {
  const categories = [
    { icon: "👗", name: "Dresses", count: "1200+ Styles" },
    { icon: "👚", name: "Tops", count: "850+ Styles" },
    { icon: "🥻", name: "Kurtis", count: "950+ Styles" },
    { icon: "👖", name: "Jeans", count: "700+ Styles" },
    { icon: "👟", name: "Shoes", count: "1100+ Styles" },
    { icon: "👜", name: "Bags", count: "650+ Styles" },
    { icon: "💍", name: "Jewellery", count: "900+ Styles" },
    { icon: "⌚", name: "Watches", count: "400+ Styles" },
    { icon: "💄", name: "Beauty", count: "1000+ Styles" },
  ];

  const products = [
    {
      name: "Floral Printed Maxi Dress",
      price: "₹699",
      oldPrice: "₹1,499",
      rating: "4.5",
      reviews: "1,248",
      discount: "53% OFF",
    },
    {
      name: "Premium Oversized T-Shirt",
      price: "₹449",
      oldPrice: "₹899",
      rating: "4.4",
      reviews: "856",
      discount: "50% OFF",
    },
    {
      name: "Classic Denim Jacket",
      price: "₹1,199",
      oldPrice: "₹1,999",
      rating: "4.6",
      reviews: "624",
      discount: "40% OFF",
    },
    {
      name: "Minimal White Sneakers",
      price: "₹1,699",
      oldPrice: "₹2,499",
      rating: "4.7",
      reviews: "2,103",
      discount: "32% OFF",
    },
  ];

  return (
    <div className="home">
      {/* Top Announcement */}
      <div className="announcement">
        🔥 <strong>Mega Fashion Sale:</strong> Up to 70% OFF on 1000+ styles
        <span>Free Shipping on orders above ₹999</span>
      </div>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="ai-badge">
              <Sparkles size={15} />
              AI POWERED SHOPPING EXPERIENCE
            </div>

            <h1>
              Discover Your Style
              <br />
              Powered by <span>AI</span>
            </h1>

            <p>
              Fashion that understands you. Discover personalized styles, smart
              recommendations and exclusive offers.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                <ShoppingBag size={18} />
                Shop Now
                <ArrowRight size={17} />
              </button>

              <button className="secondary-btn">
                <Sparkles size={18} />
                Explore AI
              </button>
            </div>

            <div className="hero-benefits">
              <div>
                <Truck size={20} />
                <div>
                  <strong>Free Delivery</strong>
                  <small>On orders above ₹999</small>
                </div>
              </div>

              <div>
                <RefreshCcw size={20} />
                <div>
                  <strong>Easy Returns</strong>
                  <small>30 day return policy</small>
                </div>
              </div>

              <div>
                <ShieldCheck size={20} />
                <div>
                  <strong>Secure Payment</strong>
                  <small>100% secure checkout</small>
                </div>
              </div>
            </div>
          </div>

          {/* YOUR PHOTOS */}
          <div className="hero-images">
            <div className="image-card image-card-main">
              <img
                src="/images/shopmind-hero-full.jpg"
                alt="ShopMind fashion"
              />

              <div className="image-label">
                <Sparkles size={15} />
                AI Style Pick
              </div>
            </div>

            <div className="image-card image-card-small">
              <img
                src="/images/shopmind-hero-portrait.jpg"
                alt="ShopMind style"
              />
            </div>

            <div className="floating-ai-card">
              <div className="ai-card-icon">✨</div>

              <div>
                <strong>AI Style Assistant</strong>
                <p>Find your perfect look</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span>EXPLORE</span>
              <h2>Shop by Category</h2>
            </div>

            <button>
              View All
              <ChevronRight size={17} />
            </button>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <div className="category-card" key={category.name}>
                <div className="category-icon">{category.icon}</div>

                <h3>{category.name}</h3>
                <p>{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending */}
      <section className="section trending-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span>🔥 MOST LOVED</span>
              <h2>Trending Now</h2>
            </div>

            <button>
              View All
              <ChevronRight size={17} />
            </button>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.name}>
                <div className="product-image">
                  <div className="discount">{product.discount}</div>

                  <button className="product-wishlist">
                    <Heart size={18} />
                  </button>

                  <div className="product-placeholder">Fashion</div>
                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>

                  <div className="rating">
                    <Star size={14} fill="currentColor" />
                    {product.rating}
                    <span>({product.reviews})</span>
                  </div>

                  <div className="price-row">
                    <strong>{product.price}</strong>
                    <del>{product.oldPrice}</del>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="ai-shopping-section">
        <div className="container">
          <div className="ai-shopping-card">
            <div className="ai-shopping-content">
              <div className="big-ai-icon">✨</div>

              <span>SHOPMIND AI</span>

              <h2>
                Your Personal
                <br />
                Shopping Assistant
              </h2>

              <p>
                Tell our AI what you're looking for and get personalized
                recommendations instantly.
              </p>

              <button className="ai-button">
                Open AI Assistant
                <ArrowRight size={18} />
              </button>
            </div>

            {/* AI assistant preview */}
            <div className="assistant-preview">
              <div className="assistant-header">
                <div className="assistant-avatar">✨</div>

                <div>
                  <strong>ShopMind AI</strong>
                  <small>● Online</small>
                </div>
              </div>

              <div className="assistant-message">
                Hi! 👋 I'm your AI shopping assistant. How can I help you today?
              </div>

              <button>👗 Find me a dress</button>

              <button>✨ Recommend products</button>

              <button>📊 Predict my purchase</button>

              <button>💡 Give me fashion advice</button>

              <div className="assistant-input">
                Ask me anything...
                <MessageCircle size={18} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deals */}
      <section className="section">
        <div className="container">
          <div className="deal-banner">
            <div>
              <span>LIMITED TIME OFFER</span>

              <h2>Mega Fashion Sale</h2>

              <p>
                Up to <strong>70% OFF</strong> on selected styles
              </p>

              <button>
                Shop Deals
                <ArrowRight size={17} />
              </button>
            </div>

            <div className="deal-percent">
              70%
              <small>OFF</small>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-grid">
            <div>
              <Truck />
              <strong>Fast Delivery</strong>
              <span>Quick & reliable shipping</span>
            </div>

            <div>
              <ShieldCheck />
              <strong>Secure Shopping</strong>
              <span>Your data is protected</span>
            </div>

            <div>
              <Sparkles />
              <strong>AI Recommendations</strong>
              <span>Personalized for you</span>
            </div>

            <div>
              <RefreshCcw />
              <strong>Easy Returns</strong>
              <span>Simple 30-day returns</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

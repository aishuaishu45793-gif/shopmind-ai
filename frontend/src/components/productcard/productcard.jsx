import { Heart, Star, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} />
        </Link>

        <span className="product-discount">{product.discount}% OFF</span>

        <button className="wishlist-button">
          <Heart size={18} />
        </button>

        <button className="quick-add">
          <ShoppingBag size={16} />
          Add
        </button>
      </div>

      <div className="product-card-content">
        <small>{product.brand}</small>

        <Link to={`/product/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>

        <div className="product-rating">
          <span>
            <Star size={13} fill="currentColor" />
            {product.rating}
          </span>

          <small>({product.reviews})</small>
        </div>

        <div className="product-price">
          <strong>₹{product.price.toLocaleString("en-IN")}</strong>

          <del>₹{product.originalPrice.toLocaleString("en-IN")}</del>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

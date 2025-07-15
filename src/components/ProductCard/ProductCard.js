import React from 'react';
import './ProductCard.css'; // Import CSS riêng của ProductCard

// SVG icon cho giỏ hàng (Bạn có thể thay thế bằng icon của riêng bạn)
const ShoppingCartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="shopping-cart-icon" // Thêm class để dễ dàng style
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 3h1.386c.51 0 .955.343 1.023.832l.95 9.184a1.5 1.5 0 001.446 1.184h8.375a1.5 1.5 0 001.446-1.184l.95-9.184A1.125 1.125 0 0017.58 3H4.814L3.692 1.352A.75.75 0 002.25 3zm6 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
    />
  </svg>
);

const ProductCard = ({ product, onDetailClick, onAddToCart, onToggleFavorite }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-card-image" />
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">{product.price}</p>
        <p className="product-card-description">{product.description}</p>
        <div className="product-card-actions">
          <div className="product-card-main-buttons"> {/* Đây là container mới đã thêm ở lần sửa trước */}
            <button className="product-card-detail-button" onClick={() => onDetailClick(product)}>
              Chi tiết
            </button>
            <button className="product-card-add-to-cart-button" onClick={() => onAddToCart(product)}>
              <ShoppingCartIcon /> {/* Thay thế text bằng icon */}
            </button>
          </div>
          <button
            className={`favorite-button ${product.isFavorite ? 'favorite-active' : ''}`}
            onClick={() => onToggleFavorite(product.id)}
          >
            {/* Đây có thể là một icon SVG hoặc font icon */}
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
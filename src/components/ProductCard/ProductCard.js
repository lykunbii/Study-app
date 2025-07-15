import React from 'react';
import './ProductCard.css'; // Import CSS riêng của ProductCard

const ProductCard = ({ product, onDetailClick, onAddToCart, onToggleFavorite }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-card-image" />
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">{product.price}</p>
        <p className="product-card-description">{product.description}</p>
        <div className="product-card-actions">
          <button className="product-card-detail-button" onClick={() => onDetailClick(product)}>
            Chi tiết
          </button>
          <button className="product-card-add-to-cart-button" onClick={() => onAddToCart(product)}>
            Thêm vào giỏ
          </button>
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
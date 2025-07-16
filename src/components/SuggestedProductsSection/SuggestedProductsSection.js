import React from 'react';
import ProductGrid from '../ProductGrid/ProductGrid'; // Tái sử dụng ProductGrid
import './SuggestedProductsSection.css'; // Import CSS riêng

const SuggestedProductsSection = ({ suggestedProducts, onFetchSuggestions, onProductDetailClick, onAddToCart, onToggleFavorite }) => {
  return (
    <section className="suggested-products-section">
      <h2 className="section-title">Gợi ý thông minh (AI)</h2>
      <div className="suggestions-controls">
        <button className="btn-primary suggest-button" onClick={onFetchSuggestions}>
          Gợi ý sản phẩm phù hợp
        </button>
      </div>

      {suggestedProducts.length > 0 ? (
        <ProductGrid
          products={suggestedProducts}
          onProductDetailClick={onProductDetailClick}
          onAddToCart={onAddToCart}
          onToggleFavorite={onToggleFavorite}
        />
      ) : (
        <div className="no-suggestions-message">
          Nhấn "Gợi ý sản phẩm phù hợp" để xem các gợi ý dựa trên hành vi của bạn!
        </div>
      )}
    </section>
  );
};

export default SuggestedProductsSection;

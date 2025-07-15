import React from 'react';
import ProductCard from '../ProductCard/ProductCard'; // Import ProductCard
import './ProductGrid.css'; // Import CSS riêng của ProductGrid

const ProductGrid = ({ products, onProductDetailClick, onAddToCart, onToggleFavorite }) => {
  if (!products || products.length === 0) {
    return (
      <div className="no-results-message">
        Không tìm thấy sản phẩm nào phù hợp.
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onDetailClick={onProductDetailClick}
          onAddToCart={onAddToCart}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
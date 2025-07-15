import React from 'react';
import './ProductDetailModal.css'; // Import CSS riêng của ProductDetailModal

const ProductDetailModal = ({ product, onClose, onAddToCart }) => {
  if (!product) return null; // Đảm bảo có sản phẩm để hiển thị

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">{product.name}</h3>
          <button className="modal-close-button" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <div className="modal-image-container">
            <img src={product.image} alt={product.name} className="modal-image" />
          </div>
          <div className="modal-details">
            <p className="modal-price">{product.price}</p>
            <p className="modal-description">{product.description}</p>
            <p className="modal-reviews">Đánh giá: {product.reviews}</p>
            <p className="modal-category">Danh mục: {product.category}</p>
            <button className="btn-primary" onClick={() => onAddToCart(product)}>
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
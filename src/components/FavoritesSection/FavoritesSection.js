import React from 'react';
import './FavoritesSection.css';

const FavoritesSection = ({ favoriteItems, onRemoveFromFavorites, onAddToCartFromFavorites, onProductDetailClick }) => {
  return (
    <section className="favorites-section-container">
      <h2 className="section-title">Sản phẩm yêu thích của bạn</h2>
      {favoriteItems.length === 0 ? (
        <div className="no-items-message">
          Bạn chưa có sản phẩm yêu thích nào.
          <p>Hãy khám phá các khóa học và tài liệu để thêm vào danh sách yêu thích nhé!</p>
        </div>
      ) : (
        <div className="favorites-list">
          {favoriteItems.map((item) => (
            <div key={item.id} className="favorite-item-card">
              <div className="favorite-item-left" onClick={() => onProductDetailClick(item)}> {/* Thêm onClick vào đây */}
                <img src={item.image} alt={item.name} className="favorite-item-image" />
                <div className="favorite-item-details">
                  <h3 className="favorite-item-name">{item.name}</h3>
                  <p className="favorite-item-price">{item.price}</p>
                </div>
              </div>
              <div className="favorite-item-actions">
                <button
                  className="btn-add-to-cart-sm"
                  onClick={(e) => { e.stopPropagation(); onAddToCartFromFavorites(item); }} // Ngăn chặn nổi bọt sự kiện
                >
                  Thêm vào giỏ
                </button>
                <button
                  className="btn-detail-sm" // Nút xem chi tiết mới
                  onClick={(e) => { e.stopPropagation(); onProductDetailClick(item); }}
                >
                  Chi tiết
                </button>
                <button
                  className="btn-remove-sm"
                  onClick={(e) => { e.stopPropagation(); onRemoveFromFavorites(item.id); }} // Ngăn chặn nổi bọt sự kiện
                >
                  Xóa
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FavoritesSection;
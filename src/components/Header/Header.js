import React from 'react';
import './Header.css'; // Import CSS riêng của Header

const Header = ({
  onLoginClick,
  onRegisterClick,
  onHomeClick,
  onFavoritesClick,
  onCartClick,
  cartItemCount = 0, // Giá trị mặc định nếu không được truyền
  favoriteItemCount = 0 // Giá trị mặc định nếu không được truyền
}) => {
  return (
    <header className="app-header">
      <div className="header-left">
        <h1 className="site-logo" onClick={onHomeClick}>EduAI</h1>
      </div>
      <nav className="app-nav">
        <button className="nav-button" onClick={onHomeClick}>Trang chủ</button>
        <button className="nav-button" onClick={onFavoritesClick}>Yêu thích ({favoriteItemCount})</button>
        <button className="nav-button" onClick={onCartClick}>Giỏ hàng ({cartItemCount})</button>
      </nav>
      <div className="header-right">
        <button className="btn-secondary" onClick={onLoginClick}>Đăng nhập</button>
        <button className="btn-primary" onClick={onRegisterClick}>Đăng ký</button>
      </div>
    </header>
  );
};

export default Header;
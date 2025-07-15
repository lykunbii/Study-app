import React, { useState } from 'react'; // Import useState hook
import './Header.css'; // Import CSS riêng của Header
import Logo from '../../assets/logo.png'; // Import logo từ assets

const Header = ({
  onLoginClick,
  onRegisterClick,
  onHomeClick,
  onFavoritesClick,
  onCartClick,
  cartItemCount = 0,
  favoriteItemCount = 0
}) => {
  // State để quản lý trạng thái đóng/mở của menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hàm để toggle trạng thái menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Tùy chọn: Thêm/bỏ class 'no-scroll' vào body để ngăn cuộn khi menu mở
    document.body.classList.toggle('no-scroll', !isMenuOpen);
  };

  // Hàm để đóng menu (khi click vào link hoặc overlay)
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    // Thêm class 'menu-open' vào header hoặc body nếu muốn CSS overlay/full-screen menu
    // Ở đây tôi gắn class 'open' vào app-nav, và 'active' vào hamburger button
    <header className="app-header">
      <div className="header-left">
        <img
        src={Logo}
        alt="StudyAI Logo"
        className="site-logo"
        onClick={() => { onHomeClick(); closeMenu(); }}
        style={{ cursor: 'pointer', height: '2.5rem', marginRight: '0.75rem' }}
      />
      <div className="logo-text">
        <span className="logo-title">EduAI</span>
        <span className="logo-subtitle">Smart Learning</span>
      </div>
      </div>

      {/* Nút Hamburger Menu - chỉ hiển thị trên mobile */}
      <button
        className={`hamburger-menu-button ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu" // Thêm cho khả năng tiếp cận
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* app-nav sẽ có class 'open' khi menu mở */}
      <nav className={`app-nav ${isMenuOpen ? 'open' : ''}`}>
        {/* Thêm closeMenu vào onClick của mỗi nút điều hướng */}
        <button className="nav-button" onClick={() => { onHomeClick(); closeMenu(); }}>Trang chủ</button>
        <button className="nav-button" onClick={() => { onFavoritesClick(); closeMenu(); }}>Yêu thích ({favoriteItemCount})</button>
        <button className="nav-button" onClick={() => { onCartClick(); closeMenu(); }}>Giỏ hàng ({cartItemCount})</button>
        {/* Nút Đăng nhập/Đăng ký cũng là một phần của nav trên mobile */}
        <button className="btn-secondary auth-button" onClick={() => { onLoginClick(); closeMenu(); }}>Đăng nhập</button>
        <button className="btn-primary auth-button" onClick={() => { onRegisterClick(); closeMenu(); }}>Đăng ký</button>
      </nav>

      {/* Overlay để làm mờ nội dung và đóng menu khi nhấp ra ngoài */}
      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;
import React, { useState } from 'react';
import './AuthModal.css'; // Import CSS riêng của AuthModal

const AuthModal = ({ isLogin, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); // Chỉ dùng cho đăng ký
  const [confirmPassword, setConfirmPassword] = useState(''); // State MỚI cho nhập lại mật khẩu

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Đăng nhập:', { email, password });
      // Xử lý logic đăng nhập ở đây
    } else {
      // Logic kiểm tra mật khẩu trùng khớp (tùy chọn, nhưng nên có)
      if (password !== confirmPassword) {
        console.error('Mật khẩu và nhập lại mật khẩu không khớp!');
        // Bạn có thể hiển thị thông báo lỗi cho người dùng ở đây
        return; // Ngừng submit nếu mật khẩu không khớp
      }
      console.log('Đăng ký:', { username, email, password, confirmPassword });
      // Xử lý logic đăng ký ở đây
    }
    onClose(); // Đóng modal sau khi submit
  };

  return (
    <div className="modal-overlay">
      <div className="auth-modal">
        <div className="modal-header">
          <h3 className="modal-title">{isLogin ? 'Đăng nhập' : 'Đăng ký'}</h3>
          <button className="modal-close-button" onClick={onClose}>&times;</button>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="username">Tên người dùng</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* Trường nhập lại mật khẩu MỚI, chỉ hiển thị khi Đăng ký */}
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirm-password">Xác nhận mật khẩu</label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}
          <button type="submit" className="auth-submit-button">
            {isLogin ? 'Đăng nhập' : 'Đăng ký'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;

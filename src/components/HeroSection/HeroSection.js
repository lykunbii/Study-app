import React from 'react';
import './HeroSection.css'; // Import CSS riêng của HeroSection
// Nếu có ảnh riêng cho hero, import ở đây:
// import heroImage from '../../assets/images/hero-image.jpg';
import heroImage from '../../assets/images/banner.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2 className="hero-title">EduAI: Nền tảng Giáo dục Trực tuyến Hàng đầu</h2>
        <p className="hero-subtitle">Khám phá các khóa học AI, Machine Learning và Data Science từ các chuyên gia hàng đầu.</p>
        <div className="hero-buttons">
          <button className="btn-primary">Khám phá ngay</button>
          <button className="btn-outline-primary">Liên hệ tư vấn</button>
        </div>
      </div>
      <div className="hero-image-container">
        {/* Thay thế bằng ảnh của bạn, ví dụ: <img src={heroImage} alt="Hero" className="hero-image" /> */}
        <img src={heroImage} alt="Hero Illustration" className="hero-image" />
      </div>
    </section>
  );
};

export default HeroSection;
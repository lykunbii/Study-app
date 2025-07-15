import React from 'react';
import './ProductTabs.css'; // Import CSS riêng của ProductTabs

const ProductTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="product-display-tabs">
      <button
        className={`tab-button ${activeTab === 'all' ? 'tab-button-active' : ''}`}
        onClick={() => onTabChange('all')}
      >
        Tất cả
      </button>
      <button
        className={`tab-button ${activeTab === 'courses' ? 'tab-button-active' : ''}`}
        onClick={() => onTabChange('courses')}
      >
        Khóa học
      </button>
      <button
        className={`tab-button ${activeTab === 'documents' ? 'tab-button-active' : ''}`}
        onClick={() => onTabChange('documents')}
      >
        Tài liệu
      </button>
    </div>
  );
};

export default ProductTabs;
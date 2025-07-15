import React, { useState } from 'react';
import './SearchFilterSection.css';

const SearchFilterSection = ({ onSearchFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState(''); // 'free', 'paid', ''
  const [productTypeFilter, setProductTypeFilter] = useState(''); // 'course', 'document', ''

  // Hàm này sẽ được gọi mỗi khi có thay đổi trong ô tìm kiếm hoặc các dropdown
  const handleChange = () => {
    // Gọi hàm được truyền từ App.js để cập nhật bộ lọc
    onSearchFilterChange({
      searchTerm,
      priceFilter,
      productTypeFilter,
    });
  };

  // Sử dụng useEffect để gọi handleChange mỗi khi state thay đổi
  // hoặc bạn có thể gọi handleChange trực tiếp trong mỗi onChange event handler
  // Tôi chọn gọi trực tiếp để dễ kiểm soát hơn
  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
    // Gọi handleChange sau khi state được cập nhật
    onSearchFilterChange({
      searchTerm: e.target.value, // Dùng giá trị mới nhất
      priceFilter,
      productTypeFilter,
    });
  };

  const handlePriceFilterChange = (e) => {
    setPriceFilter(e.target.value);
    onSearchFilterChange({
      searchTerm,
      priceFilter: e.target.value, // Dùng giá trị mới nhất
      productTypeFilter,
    });
  };

  const handleProductTypeFilterChange = (e) => {
    setProductTypeFilter(e.target.value);
    onSearchFilterChange({
      searchTerm,
      priceFilter,
      productTypeFilter: e.target.value, // Dùng giá trị mới nhất
    });
  };


  return (
    <section className="search-filter-section">
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Tìm kiếm khóa học, tài liệu..."
          className="search-input"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        <select
          className="price-filter-select"
          value={priceFilter}
          onChange={handlePriceFilterChange}
        >
          <option value="">Giá (Tất cả)</option>
          <option value="free">Miễn phí</option>
          <option value="paid">Có phí</option>
        </select>
      </div>
    </section>
  );
};

export default SearchFilterSection;
import React, { useState } from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import SearchFilterSection from './components/SearchFilterSection/SearchFilterSection';
import ProductTabs from './components/ProductTabs/ProductTabs';
import ProductGrid from './components/ProductGrid/ProductGrid';
import ProductDetailModal from './components/ProductDetailModal/ProductDetailModal';
import AuthModal from './components/AuthModal/AuthModal';
import CartSection from './components/CartSection/CartSection';
import FavoritesSection from './components/FavoritesSection/FavoritesSection';
import Chatbot from './components/Chatbot/Chatbot';
import Toast from './components/Toast/Toast';

import './styles/global.css';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [showProductDetailModal, setShowProductDetailModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeProductTab, setActiveProductTab] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [toast, setToast] = useState(null);
  const [activeTab, setActiveTab] = useState('home');

  const [searchFilters, setSearchFilters] = useState({
    searchTerm: '',
    priceFilter: '',
    productTypeFilter: '',
  });

  // --- Cập nhật initialProducts với đường dẫn hình ảnh từ Picsum Photos ---
  const initialProducts = [
    { id: 'p1', name: 'Khóa học AI cơ bản', price: '$99.00', description: 'Giới thiệu về trí tuệ nhân tạo, các thuật toán cơ bản và ứng dụng.', image: 'https://picsum.photos/seed/ai-course/100/80', reviews: '5.0 (120)', category: 'Course', keywords: ['ai', 'trí tuệ nhân tạo', 'machine learning', 'công nghệ', 'khoa học dữ liệu'], isPaid: true },
    { id: 'p2', name: 'Tài liệu Machine Learning Nâng cao', price: '$149.00', description: 'Đi sâu vào học máy với các mô hình phức tạp và kỹ thuật tối ưu hóa.', image: 'https://picsum.photos/seed/ml-doc/100/80', reviews: '4.8 (85)', category: 'Document', keywords: ['machine learning', 'ml', 'học máy', 'phân tích dữ liệu', 'thuật toán'], isPaid: true },
    { id: 'p3', name: 'Khóa học Data Science với Python', price: '$199.00', description: 'Học cách phân tích dữ liệu, trực quan hóa và xây dựng mô hình với Python.', image: 'https://picsum.photos/seed/data-science/100/80', reviews: '4.9 (150)', category: 'Course', keywords: ['data science', 'python', 'khoa học dữ liệu', 'phân tích dữ liệu', 'trực quan hóa'], isPaid: true },
    { id: 'p4', name: 'Sách Hướng dẫn Deep Learning', price: '$79.00', description: 'Khám phá mạng nơ-ron sâu và các kiến trúc tiên tiến.', image: 'https://picsum.photos/seed/dl-book/100/80', reviews: '4.7 (60)', category: 'Document', keywords: ['deep learning', 'học sâu', 'mạng nơ-ron', 'ai', 'công nghệ'], isPaid: true },
    { id: 'p5', name: 'Khóa học Xử lý ngôn ngữ tự nhiên (NLP)', price: '$120.00', description: 'Tìm hiểu các kỹ thuật xử lý ngôn ngữ tự nhiên và ứng dụng trong AI.', image: 'https://picsum.photos/seed/nlp-course/100/80', reviews: '4.5 (90)', category: 'Course', keywords: ['nlp', 'ngôn ngữ tự nhiên', 'xử lý ngôn ngữ', 'chatbot', 'giao tiếp'], isPaid: true },
    { id: 'p6', name: 'Ebook Kỹ thuật Thị giác máy tính', price: '$0.00', description: 'Cung cấp kiến thức toàn diện về thị giác máy tính và nhận diện hình ảnh.', image: 'https://picsum.photos/seed/cv-ebook/100/80', reviews: '4.6 (70)', category: 'Document', keywords: ['thị giác máy tính', 'computer vision', 'nhận diện hình ảnh', 'ảnh', 'video'], isPaid: false },
    { id: 'p7', name: 'Khóa học Tiếng Anh Giao tiếp cơ bản', price: '$80.00', description: 'Học tiếng Anh giao tiếp từ A-Z với người bản xứ.', image: 'https://picsum.photos/seed/english-course/100/80', reviews: '4.9 (200)', category: 'Course', keywords: ['tiếng anh', 'giao tiếp', 'cơ bản', 'người bản xứ', 'phát âm'], isPaid: true },
    { id: 'p8', name: 'Bộ tài liệu Luyện thi IELTS', price: '$60.00', description: 'Tài liệu đầy đủ để chuẩn bị cho kỳ thi IELTS đạt điểm cao.', image: 'https://picsum.photos/seed/ielts-prep/100/80', reviews: '4.7 (180)', category: 'Document', keywords: ['ielts', 'luyện thi', 'tiếng anh', 'tài liệu', 'chứng chỉ'], isPaid: true },
    { id: 'p9', name: 'Khóa học Tiếng Anh Thương mại', price: '$150.00', description: 'Nâng cao kỹ năng tiếng Anh trong môi trường kinh doanh quốc tế.', image: 'https://picsum.photos/seed/business-english/100/80', reviews: '4.8 (110)', category: 'Course', keywords: ['tiếng anh', 'thương mại', 'kinh doanh', 'business english', 'quốc tế'], isPaid: true },
    { id: 'p10', name: 'Luyện Nói Tiếng Anh với Người Mỹ', price: '$100.00', description: 'Thực hành nói tiếng Anh chuẩn giọng Mỹ với giáo viên bản xứ.', image: 'https://picsum.photos/seed/american-accent/100/80', reviews: '5.0 (250)', category: 'Course', keywords: ['tiếng anh', 'người mỹ', 'giao tiếp', 'luyện nói', 'phát âm'], isPaid: true },
  ];

  const [products, setProducts] = useState(initialProducts.map(p => ({
    ...p,
    isFavorite: false,
  })));

  const handleLoginClick = () => {
    setShowLoginModal(true);
    setShowRegisterModal(false);
  };

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
    setShowLoginModal(false);
  };

  const handleCloseAuthModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };

  const handleSuggestProducts = () => {
    setShowSuggestions(true);
    setToast({ message: 'Đang lấy gợi ý sản phẩm...', type: 'info' });
    setTimeout(() => {
      // Giả lập API: gợi ý dựa trên sản phẩm đã thích
      const favorites = getFavoriteProducts();
      let suggestions;
      if (favorites.length > 0) {
        const favoriteCategories = favorites.map(f => f.category);
        suggestions = products.filter(
          p =>
            favoriteCategories.includes(p.category) &&
            !favorites.some(f => f.id === p.id)
        );
        if (suggestions.length === 0) {
          suggestions = products.filter(p => !favorites.some(f => f.id === p.id)).slice(0, 3);
        }
      } else {
        suggestions = products.slice(0, 3);
      }
      setSuggestedProducts(suggestions);
      setToast({ message: 'Đã gợi ý sản phẩm phù hợp cho bạn!', type: 'success' });
    }, 800);
  };

  const handleProductDetailClick = (product) => {
    setSelectedProduct(product);
    setShowProductDetailModal(true);
  };

  const handleCloseProductDetailModal = () => {
    setShowProductDetailModal(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setToast({ message: `${product.name} đã được thêm vào giỏ!`, type: 'success' });
    setShowProductDetailModal(false);
  };

  const handleAddToCartFromFavorites = (product) => {
    handleAddToCart(product);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    setToast({ message: 'Sản phẩm đã được xóa khỏi giỏ hàng.', type: 'info' });
  };

  const handleToggleFavorite = (productId) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) =>
        product.id === productId ? { ...product, isFavorite: !product.isFavorite } : product
      );
      const productForToast = updatedProducts.find(p => p.id === productId);
      setToast({
        message: productForToast.isFavorite ? `${productForToast.name} đã được thêm vào mục yêu thích!` : `${productForToast.name} đã bị bỏ khỏi mục yêu thích.`,
        type: 'info'
      });
      return updatedProducts;
    });
  };

  const handleRemoveFromFavorites = (productId) => {
    handleToggleFavorite(productId);
  };

  const handleCheckout = () => {
    setToast({ message: 'Chức năng thanh toán đang được phát triển!', type: 'info' });
  }

  const handleSearchFilterChange = (filters) => {
    setSearchFilters(filters);
  };

  const getFilteredProducts = () => {
    let filtered = products;

    if (activeProductTab === 'courses') {
      filtered = filtered.filter(p => p.category === 'Course');
    } else if (activeProductTab === 'documents') {
      filtered = filtered.filter(p => p.category === 'Document');
    }

    if (searchFilters.searchTerm) {
      const lowerCaseSearchTerm = searchFilters.searchTerm.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        p.description.toLowerCase().includes(lowerCaseSearchTerm) ||
        (p.keywords && p.keywords.some(keyword => keyword.toLowerCase().includes(lowerCaseSearchTerm)))
      );
    }

    if (searchFilters.priceFilter === 'free') {
      filtered = filtered.filter(p => parseFloat(p.price.replace('$', '')) === 0);
    } else if (searchFilters.priceFilter === 'paid') {
      filtered = filtered.filter(p => parseFloat(p.price.replace('$', '')) > 0);
    }

    if (searchFilters.productTypeFilter) {
      if (
        activeProductTab === 'all' ||
        (activeProductTab === 'courses' && searchFilters.productTypeFilter === 'course') ||
        (activeProductTab === 'documents' && searchFilters.productTypeFilter === 'document')
      ) {
        filtered = filtered.filter(p => p.category.toLowerCase() === searchFilters.productTypeFilter);
      }
    }

    return filtered;
  };

  const getFavoriteProducts = () => {
    return products.filter(p => p.isFavorite);
  };

  return (
    <div className="app-container">
      <Header
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
        onHomeClick={() => setActiveTab('home')}
        onFavoritesClick={() => setActiveTab('favorites')}
        onCartClick={() => setActiveTab('cart')}
        cartItemCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        favoriteItemCount={getFavoriteProducts().length}
      />

      <main className="main-content">
        {activeTab === 'home' && (
          <>
            <HeroSection />
            <section className="category-section">
              <h2 className="section-title">Khám phá các khóa học và tài liệu</h2>
              <div className="search-suggest-row">
                <div className="search-filter-actions">
                  <SearchFilterSection onSearchFilterChange={handleSearchFilterChange} />
                  <button
                    className="btn-suggest"
                    onClick={handleSuggestProducts}
                  >
                    {/* Nếu dùng icon: <Sparkles ... /> */}
                    Gợi ý sản phẩm phù hợp
                  </button>
                </div>
              </div>
              {showSuggestions && suggestedProducts.length > 0 && (
                <section className="suggestion-section" style={{ margin: '1.5rem 0' }}>
                  <h3 className="section-title" style={{ fontSize: '1.3rem' }}>Sản phẩm gợi ý cho bạn</h3>
                  <div className="cart-items-list">
                    {suggestedProducts.map(item => (
                      <div key={item.id} className="cart-item-card">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                          <div className="cart-item-name">{item.name}</div>
                          <div className="cart-item-price">{item.price}</div>
                        </div>
                        <div className="cart-item-actions">
                          <button className="btn-detail-sm" onClick={() => handleProductDetailClick(item)}>Chi tiết</button>
                          <button className="btn-add-to-cart-sm" onClick={() => handleAddToCart(item)}>Thêm vào giỏ</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
              <ProductTabs activeTab={activeProductTab} onTabChange={setActiveProductTab} />
              <ProductGrid
                products={getFilteredProducts()}
                onProductDetailClick={handleProductDetailClick}
                onAddToCart={handleAddToCart}
                onToggleFavorite={handleToggleFavorite}
              />
            </section>
          </>
        )}

        {activeTab === 'favorites' && (
          <FavoritesSection
            favoriteItems={getFavoriteProducts()}
            onRemoveFromFavorites={handleRemoveFromFavorites}
            onAddToCartFromFavorites={handleAddToCartFromFavorites}
            onProductDetailClick={handleProductDetailClick}
          />
        )}

        {activeTab === 'cart' && (
          <CartSection
            cartItems={cartItems}
            onRemoveFromCart={handleRemoveFromCart}
            onCheckout={handleCheckout}
            onProductDetailClick={handleProductDetailClick}
          />
        )}
      </main>

      {showProductDetailModal && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={handleCloseProductDetailModal}
          onAddToCart={handleAddToCart}
        />
      )}

      {showLoginModal && (
        <AuthModal isLogin={true} onClose={handleCloseAuthModal} />
      )}
      {showRegisterModal && (
        <AuthModal isLogin={false} onClose={handleCloseAuthModal} />
      )}

      <Chatbot allProducts={products} />

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default App;
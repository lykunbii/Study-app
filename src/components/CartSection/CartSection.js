import React from 'react';
import './CartSection.css';

const CartSection = ({ cartItems, onRemoveFromCart, onCheckout, onProductDetailClick }) => {
    // Tính tổng tiền
    const totalPrice = cartItems.reduce((total, item) => {
        const priceValue = parseFloat(item.price.replace('$', ''));
        return total + (priceValue * item.quantity);
    }, 0);

    return (
        <section className="cart-section-container">
            <h2 className="section-title">Giỏ hàng của bạn</h2>
            {cartItems.length === 0 ? (
                <div className="no-items-message">
                    Giỏ hàng của bạn đang trống.
                    <p>Hãy thêm các khóa học và tài liệu bạn yêu thích vào giỏ hàng nhé!</p>
                </div>
            ) : (
                <>
                    <div className="cart-items-list">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item-card">
                                <div className="cart-item-left" onClick={() => onProductDetailClick(item)}> {/* Thêm onClick vào đây */}
                                    <img src={item.image} alt={item.name} className="cart-item-image" />
                                    <div className="cart-item-details">
                                        <h3 className="cart-item-name">{item.name}</h3>
                                        <p className="cart-item-price">{item.price} x {item.quantity}</p> {/* Hiển thị số lượng */}
                                    </div>
                                </div>
                                <div className="cart-item-actions"> {/* Đổi tên class cho rõ ràng hơn */}
                                    <button
                                        className="btn-detail-sm" // Nút xem chi tiết mới
                                        onClick={(e) => { e.stopPropagation(); onProductDetailClick(item); }}
                                    >
                                        Chi tiết
                                    </button>
                                    <button
                                        className="btn-remove-sm" // Sử dụng lại btn-remove-sm
                                        onClick={(e) => { e.stopPropagation(); onRemoveFromCart(item.id); }} // Ngăn chặn nổi bọt sự kiện
                                    >
                                        Xóa
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <div className="cart-total">
                            Tổng cộng: <strong>${totalPrice.toFixed(2)}</strong>
                        </div>
                        <button className="checkout-button" onClick={onCheckout}>
                            Thanh toán ngay
                        </button>
                    </div>
                </>
            )}
        </section>
    );
};

export default CartSection;
import React from 'react';
import './payment.scss';

function Payment() {
    return (
        
        <div className="payment-container">
            <h2 className="center">THANH TOÁN</h2>
            <div className="shipping-info">
                <h3>1. GIAO HÀNG</h3>
                <div className="shipping-address">
                    <div className="required-fields">
                        <label htmlFor="firstName">Tên*</label>
                        <input type="text" id="firstName" name="firstName" required />

                        <label htmlFor="lastName">Họ*</label>
                        <input type="text" id="lastName" name="lastName" required />

                        <label htmlFor="address1">Địa chỉ*</label>
                        <input type="text" id="address1" name="address1" required />

                        <label htmlFor="city">Tỉnh/TP</label>
                        <input type="text" id="lastName" name="lastName" required />

                        <label htmlFor="district">Quận/ Huyện</label>
                        <input type="text" id="lastName" name="lastName" required />

                        <label htmlFor="ward">Phường/ Xã</label>
                        <input type="text" id="lastName" name="lastName" required />

                        <label htmlFor="phone">Số liên lạc</label>
                        <input type="tel" id="phone" name="phone" />

                        <label htmlFor="email">Địa chỉ email*</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                </div>
                <h3>2. PHƯƠNG THỨC VẬN CHUYỂN</h3>
                
                <p>Giao hàng tiêu chuẩn tại Việt Nam. Giá vận chuyển đã bao gồm Thuế & Phí.
                    Ngày giao dự kiến tùy thuộc vào khu vực của khách hàng</p>
                <h3>3. THANH TOÁN</h3>
            </div>
            <div className="payment-method">
               
                <div className="promo-code">
                    <label htmlFor="promoCode">Nhập mã khuyến mãi</label>
                    <input type="text" id="promoCode" name="promoCode" />
                </div>
                <h4>THÔNG TIN ĐƠN HÀNG</h4>
                <div className="order-summary">
                    <div className="order-item">
                        <p>Tên sản phẩm</p>
                        <p>Giá</p>
                        <p>Số lượng</p>
                        <p>Tổng</p>
                    </div>
                    
                   {/*  {products.map((product) => (
                        <div className="order-item" key={product.id}>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <p>{product.quantity}</p>
                            <p>{product.price * product.quantity}</p>
                        </div>
                    ))} */}
                </div>
                <div className="order-total">
                    <p>Tổng</p>
                   {/*  <p>{calculateTotalPrice(products)} VND</p> */}
                </div>
            </div>
            <button className="checkout-button">Thanh toán</button>
        </div>
    );
}

export default Payment;

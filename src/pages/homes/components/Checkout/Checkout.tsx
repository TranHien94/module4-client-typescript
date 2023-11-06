import React from 'react';
import './checkout.scss';
import { useNavigate } from 'react-router-dom';

function Checkout() {
    const navigate = useNavigate();
    const userLoggedIn = localStorage.getItem("token") !== null;
    // Xử lý khi người dùng nhấn nút "Thanh toán"
    const handlePayment = () => {

        // Nếu đã đăng nhập, chuyển hướng đến trang "Payment" để hiển thị danh sách đơn hàng
        if (userLoggedIn) {
            navigate("/payment");
        } else {
            navigate("/login")
        }
    }
    return (
        <div className="checkout-container">
            <div className="checkout-column login">
                <h2>ĐĂNG NHẬP</h2>
                <form>
                    <label htmlFor="email">Địa chỉ email</label>
                    <input type="text" id="email" />
                    <label htmlFor="password">Mật khẩu</label>
                    <input type="password" id="password" />
                    <button type="submit" onClick={handlePayment}>ĐĂNG NHẬP VÀ THANH TOÁN</button>
                    
                </form>
            </div>
            <div className="checkout-column guest">
                <h2>KHÁCH THANH TOÁN</h2>
                <p>Tiếp tục thanh toán mà không cần đăng nhập. Bạn sẽ có cơ hội tạo tài khoản sau khi hoàn tất thanh toán.</p>
                <button onClick={() => navigate("/payment")}>THANH TOÁN VỚI TƯ CÁCH KHÁCH VÃNG LAI</button>
            </div>
        </div>
    );
}

export default Checkout;

import { useNavigate } from 'react-router-dom';
import './footer.scss';

export default function Footer() {
    const navigate = useNavigate()
    return (
        <footer>
            <div className='footer-top'>
                <div className="footer-left">
                    <p>MUA SẮM NÀO</p>
                    <span>Tài khoản của tôi</span>
                    <span>Chính sách giao hàng</span>
                    <span>Chính sách Bảo hành & Đổi trả</span>
                    <span>Khuyến mãi</span>
                    <span>Bảng quy đổi kích thước</span>
                </div>
                <div className="footer-middle">
                    <div className='footer-box'>
                        <p>CHĂM SÓC KHÁCH HÀNG</p>
                        <span>Kiểm tra trạng thái đơn hàng</span>
                        <span>Ưu đãi thành viên</span>
                        <span>Câu hỏi thường gặp</span>
                        <span>Liên hệ</span>
                        <span>Chính sách thanh toán</span>
                    </div>
                    <div className='footer-box'>
                        <p>VỀ CHÚNG TÔI</p>
                        <span>Định vị cửa hàng</span>
                        <span>Về thương hiệu</span>
                        <span>Phát triển bền vững</span>
                        <span>Nhượng quyền thương mại</span>
                    </div>

                </div>
                <div className="footer-right">
                    <p>Ý KIẾN CỦA BẠN</p>
                    <input type="text" placeholder='Enter your email' />
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    ©2023 Stumptown Coffee Roasters Terms & Conditions Privacy Policy Your Privacy Choices
                </p>
                <div className='social-media-icon'>
                    <a href='https://www.charleskeith.vn/vn'><i className="fa-brands fa-facebook"></i></a>
                    <a href='https://www.charleskeith.vn/vn'><i className="fa-brands fa-instagram"></i></a>
                    <a href='https://www.charleskeith.vn/vn'><i className="fa-brands fa-twitter"></i></a>
                    <a href='https://www.charleskeith.vn/vn'><i className="fa-brands fa-tiktok"></i></a>
                </div>
            </div>
        </footer >
    )
}

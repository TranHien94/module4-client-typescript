
import { message} from "antd";
import api from '@/services/api'
import './register.scss';

export default function Register() {
    const handleFormSubmit = async (e: any) => {
        e.preventDefault()

        const newUser = {
            userName: e.target.userName.value,
            email: e.target.email.value,
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            password: e.target.password.value
        }

        await api.userApi.register(newUser).then((res: any) => {
            if(res.status != 200) {
                message.warning(res.data.message)
            } else {
                message.success(res.data !== undefined ? res.data.message: res.message)
                setTimeout(() => {
                    window.location.href = "/login"
                })
            }
        })
            .catch(err => {
                message.error('An error occurred during registration. Please try again')
            })
    }

    return (
        <div className="register_container">
            <div className="register-left">
                <h1><strong>Tạo tài khoản</strong><br />
                   </h1>
                <p>
                    Lưu thông tin của bạn để thanh toán nhanh hơn, lưu trữ các sản phẩm vào danh sách yêu thích và xem lịch sử đơn hàng & hoàn trả của bạn.
                    
                </p>
                <p>
                    Lưu ý: Chỉ những đơn hàng được đặt sau khi tạo tài khoản mới được lưu trong tài khoản CHARLES & KEITH của bạn.
                </p>
            </div>
            <div className="register-right">
                <p>Create Account <br/>Already Account? <a href="/login">Login Here</a></p>
                <form onSubmit={handleFormSubmit}>
                    <div className="form_control">
                        <input type="text" name="userName" id="userName" placeholder="Enter your username" required/>
                    </div>
                    <div className="form_control">
                        <input type="text" name="email" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form_control">
                        <input type="text" name="firstName" id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="form_control">
                        <input type="text" name="lastName" id="lastName" placeholder="Enter your last name" required />
                    </div>
                    <div className="form_control">
                        <input type="password" name="password" id="password" placeholder="Enter your password" required />
                    </div>
                    <button type="submit" className="register_btn">Create account</button>
                </form>
            </div>
        </div>
    )
}
import { useState} from 'react'
import { message } from 'antd'
import api from '@/services/api'
import {useNavigate} from "react-router-dom";
import './login.scss';

export default function Login () {
    const navigate = useNavigate()
    const [passwordError, setPasswordError] = useState('')
    const [userNameError, setUserNameError] = useState('')

    const validateUserName = (userName: string) => {
        if (userName.length < 3) {
            setUserNameError("Tên đăng nhập có ít nhất 3 ký tự")
            return false
        } else {
            setUserNameError('')
            return true;
        }
    }
    const validatePassword = (password: string) => {
        if(password.length < 6) {
            setPasswordError("Mật khẩu phải có ít nhất 6 ký tự")
            return false
        } else {
            setPasswordError('')
            return true
        }
    }
    const handleFormSubmit = async (e: any) => {
        e.preventDefault()
        const data = {
            userName: e.target.userName.value,
            password: e.target.password.value
        }
        console.log("data login: ", data)
        await api.userApi.login(data).then((res: any) => {
            if (res.status !== 200) {
                if (res.data && res.data.message) {
                    message.warning(res.data.message);
                } else {
                    message.warning("Invalid username or password");
                }
            } else {
                if (res.data && res.data.message) {
                    message.success(res.data.message);
                } else {
                    message.success("Login successfully!!!");
                }
                localStorage.setItem("token", res.data.token);
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            }
        })
            .catch(err => {
                message.error("An error occurred during login. Please try again")
            })
    }
    return (
        <div className="login_container">
            <div className="login-left">
                <h1><strong>Đăng nhập</strong><br />
                </h1>
                <p>
                    Lưu thông tin của bạn để thanh toán nhanh hơn, lưu trữ các sản phẩm vào danh sách yêu thích và xem lịch sử đơn hàng & hoàn trả của bạn.
                </p>
                <p>
                    Lưu ý: Chỉ những đơn hàng được đặt sau khi tạo tài khoản mới được lưu trong tài khoản CHARLES & KEITH của bạn.
                </p>
            </div>
            <div className="login-right">
                <form onSubmit={handleFormSubmit}>
                    <div className="form-control-login">
                        <input type="text" name="userName" id="userName" placeholder="Enter user name" required onChange={e => validateUserName(e.target.value)}/>
                        {userNameError && <p className="error-message">{userNameError}</p>}
                    </div>
                    <div className="form-control-login">
                        <input type="password" name="password" id="password" placeholder="Enter password" required onChange={e => validatePassword(e.target.value)}/>
                        {passwordError && <p className="error-message">{passwordError}</p>}
                    </div>
                    <button type="submit" className="login_btn">Đăng nhập</button>
                    <p>
                        <button type="submit" className="login_btn" onClick={() => navigate("/register")}>Quay lại trang đăng ký</button>
                    </p>
                    
                </form>
            </div>
        </div>
    )
}
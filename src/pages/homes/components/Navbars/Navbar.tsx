import {Carousel} from 'antd'
import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Search from "../Search/Search";
import './navbar.scss'
import DropdownLogout from "../Dropdown/DropdownLogout";
import Cart from "../Cart/Cart";

import { useSelector } from 'react-redux';
import { StoreType } from '@/stores';

function Navbar() {
    const [banners, setBanners] = useState([
        {
            id: 1,
            title: "Đổi trả dễ dàng trong vòng 30 ngày kể từ khi nhận sản phẩm."
        },
        {
            id: 2,
            title: "Miễn phí vận chuyển cho khách hàng mới"
        }
    ])
    const navigate = useNavigate()

        const categoryStore = useSelector((store: StoreType) => store.categoryStore);
   return (
       <nav>
           <div className="carousel-container">
               <Carousel
                autoplay
                autoplaySpeed={2000}
                effect={"fade"}
                dots={false}
                dotPosition={"bottom"}
               >

                   {
                       banners.map((banner, index) => (
                           <div className="items" key={banner.id + index}>
                               <p className="title">{banner.title}</p>
                           </div>
                       ))
                   }
               </Carousel>
           </div>
           <div className="nav-container">
               <div className="logo" onClick={() => navigate("/")}>
                   <img src="https://aeonmall-binhduongcanary.com.vn/wp-content/uploads/2020/11/logosaqbk1441612175.-750x468.png" alt="logo"/>
               </div>
               <div className="middle-nav">
                   {categoryStore.data?.map((category) => (
                       <span key={category.id} onClick={() => navigate(`/collections/${category.id}`)}>
                           {category.title}
                       </span>
                   ))}
               </div>
               <div className="right-nav">
                   <span className="right-nav-icon"><Search /></span>
                   <span className="right-nav-icon">
                       <DropdownLogout />
                   </span>
                   <span className="right-nav-icon cart-icon"><Cart /></span>
               </div>
           </div>
       </nav>
   )
}

export default Navbar
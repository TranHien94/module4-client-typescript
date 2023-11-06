import { useEffect, useState} from 'react'
import api from '@/services/api'
import { useParams} from "react-router-dom";
import './productDetail.scss';
import { message } from 'antd';

interface Product {
    id: string,
    name: string,
    avatar: string,
    price: number,
    des: string,
    categoryId: number,
    categoryName: string,
    updateAt: Date
}
export default function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    console.log("product Detail: ", product)
    useEffect(() => {
        if(id) {
            api.productApi.findById(id)
                .then((res : any) => {
                    if(res.status == 200) {
                        setProduct(res.data.data)
                    }
                })
                .catch((err : any) => {
                    throw new Error(err)
                })
        }
    }, [id])

    function handleAddToCart(productId: string, quantity: number) {
        let carts: CartItem[] = JSON.parse(localStorage.getItem("carts") ?? "[]");
        if (carts.length == 0) {
            // cart rỗng
            carts.push({
                productId,
                quantity
            });
            message.success("addToCartSuccess");
        } else {
            // cart có sản phẩm
            let flag: boolean = false;
            carts = carts.map(item => {
                if (item.productId == productId) {
                    message.success("addToCartSuccess");
                    item.quantity += quantity
                    flag = true;
                }
                return item
            })
            if (!flag) {
                carts.push({
                    productId,
                    quantity
                })
                message.success("addToCartSuccess");
            }
        }
        localStorage.setItem("carts", JSON.stringify(carts)) // save to local
    }

    return (
        <div className="productDetail-container">
            <div className="product-gallery">
                <img src={(product as Product).avatar} alt=""/>
            </div>
             <div className="product-essential">
                 <header className="product-header">
                     <h1 className="product-title">{(product as Product).name}</h1>
                 </header>
                 <p className="product-price">{(product as Product).price}đ</p>
                 <p className="product-description">{(product as Product).des}</p>
                 <p className="product-quantity-label">SỐ LƯỢNG</p>
                 <div className="product-quantity">
                     <button>
                         <span className="material-symbols-outlined">remove</span>
                     </button>
                     <span>{quantity}</span>
                     <button>
                         <span className="material-symbols-outlined">add</span>
                     </button>
                 </div>
                 <button className='addToCart-button' onClick={() => handleAddToCart((product as Product).id, quantity)}>THÊM VÀO GIỎ HÀNG</button>
             </div>
        </div>
    )
}

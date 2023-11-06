
import './product.scss'
import api from '@/services/api'
import { useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import noAvatar from '@/assets/no_avatar.jpg'
import {message} from 'antd'

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


/*interface Category {
    id: string,
    title: string
}*/

interface CartItem {
    productId: string,
    quantity: number
}

export default function Product() {
    const { categoryId} = useParams()
    const navigate = useNavigate();
    const [products, setProducts] = useState([])
    console.log("products: ", products)
    useEffect(() => {
        if (categoryId) {
            api.productApi.findByCategory(categoryId)
                .then((res: any) => {
                    if(res.status == 200) {
                        setProducts(res.data.data)
                    }
                })
                .catch((err: string) => {
                    console.log(err)
                })
        }
    }, [categoryId])

    function handleAddToCart(productId: string) {
        let carts: CartItem[] = JSON.parse(localStorage.getItem('carts') ?? "[]")
        if (carts.length == 0) {
            // cart rỗng
            carts.push({
                productId,
                quantity: 1
            })
        } else {
            //cart có sản phẩm
            let flag: boolean = false
            carts = carts.map(item => {
                if(item.productId == productId) {
                    message.success("Thêm vào giỏ hàng thành công")
                    item.quantity += 1
                    flag = true
                }
                return item
            })
            if (!flag) {
                carts.push({
                    productId,
                    quantity: 1
                })
                message.success("Thêm vào giỏ hàng thành công")
            }
        }
        localStorage.setItem("carts", JSON.stringify(carts)) // save carts to local
    }
    return (
        <div className="products-container">
            <div className="collection-navigation">

            </div>

            <div className="product-items">
                {
                    products?.map((product: Product) => (
                        <div className="product-item">
                            <div className="product-item-image" 
                                onClick={() => navigate(`/products/${product.id}`)}>
                                <img src={(product as Product).avatar == "no_avatar.jpg" ? noAvatar : (product as Product).avatar } alt="product-image"/>
                            </div>
                            <div className="product-item-content">
                                <h3>{(product as Product).name}</h3>
                                <p className="product-item-price">{(product as Product).price}</p>
                            </div>
                            <div> <button className="addToCart-button" onClick={() => handleAddToCart(product.id)}>THÊM VÀO GIỎ HÀNG</button></div>
                            
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

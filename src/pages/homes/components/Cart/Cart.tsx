import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./cart.scss"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import api from '@/services/api';
import { useDispatch } from 'react-redux';
import { Popconfirm } from 'antd';
const text = 'Are you sure to delete this task?';
const description = 'Delete product';

// Define a union type for the allowed placement values
type OffcanvasPlacement = 'top' | 'bottom' | 'start' | 'end';

interface OffCanvasExampleProps {
    name: string;
    placement: OffcanvasPlacement | undefined; // Use the defined union type
}

interface Product {
    id: string;
    name: string;
    avatar: string;
    price: number;
    des: string;
    categoryId: string;
    productPictures: {
        id: string;
        path: string;
    }[]
}

interface CartItem {
    productId: string;
    quantity: number;
    price: number;
}

interface CartItemDetail extends CartItem {
    productDetail: Product
}

interface newGuestReceipt {
    email: string;
    phoneNumber: string;
    total: number;
    payMode: string;
}

function OffCanvasExample({ name, placement }: OffCanvasExampleProps) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [cart, setCart] = useState<CartItemDetail[]>([]);

    async function formatCart() {
        setIsLoading(true);
        const cartTemp: CartItemDetail[] = [];
        const carts: CartItem[] = JSON.parse(localStorage.getItem("carts") ?? "[]");
        for (const i in carts) {
            const productDetail = await api.productApi.findById(carts[i].productId).then((res) => res.data.data)
            cartTemp.push({
                ...carts[i],
                productDetail
            })
        }
        setCart(cartTemp);
        setIsLoading(false);
    }

    useEffect(() => {
        formatCart();
    }, [localStorage.getItem("carts")])

    const handleIncreaseQuantity = (index: number) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity += 1;
        localStorage.setItem("carts", JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    const handleDecreaseQuantity = (index: number) => {
        const updatedCart = [...cart];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;
            localStorage.setItem("carts", JSON.stringify(updatedCart));
            setCart(updatedCart);
        }
    };

    const handleDeleteProduct = (productId: string) => {
        const updatedCart = cart.filter((item) => item.productId != productId);
        localStorage.setItem("carts", JSON.stringify(updatedCart));
        setCart(updatedCart);
        // console.log("productId", productId)
    }

    const subTotal = cart.reduce((total, item) => {
        return total + item.quantity * item.productDetail.price
    }, 0)

    const cartQuantity = cart.reduce((total, item) => {
        return total + item.quantity
    }, 0)

    return (
        <>
            <button onClick={handleShow}>
                <i className="fa-solid fa-cart-shopping"></i> {cartQuantity}
            </button>
            <Offcanvas show={show} onHide={handleClose} placement={placement}>
                <Offcanvas.Header className='cart-header'>
                    <Offcanvas.Title>{t("Giỏ hàng của bạn")} [{cart.length}]</Offcanvas.Title>
                    {/* Close button */}
                    <Button variant="outline-secondary" onClick={handleClose} className='close-button'>
                        <i className="fa-solid fa-xmark"></i>
                    </Button>
                </Offcanvas.Header>
                <Offcanvas.Body className='cart-body'>
                    <p>
                        <img src="https://media.istockphoto.com/id/1312921508/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-xe-t%E1%BA%A3i-giao-h%C3%A0ng-mi%E1%BB%85n-ph%C3%AD-v%E1%BA%ADn-chuy%E1%BB%83n-nhanh-thi%E1%BA%BFt-k%E1%BA%BF-cho-trang-web-v%C3%A0-%E1%BB%A9ng-d%E1%BB%A5ng-di.jpg?s=612x612&w=0&k=20&c=OOMkIbb-cGWGZXm39URW6CmUpcOYLOIrt7yi1j9e_Sk=" alt="" />
                        Chúc mừng! Bạn đã được miễn phí ship
                    </p>
                    <div className='cart-products'>
                        {isLoading ? <div className="d-flex justify-content-center loading-wrapper">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div> :
                            cart.length > 0 ?
                                cart?.map((product: any, index: number) => <div className='cart-product' key={product.productId}>
                                    <div className='cart-product-img'>
                                        <img src={product.productDetail.avatar} alt="" />
                                    </div>
                                    <div className='cart-product-infor'>
                                        <h5 className='cart-product-name'>{product.productDetail.name}</h5>
                                        <p className='cart-product-price'>{product.productDetail.price} VNĐ</p>
                                        <p className='cart-product-quantity-title'>SỐ LƯỢNG</p>
                                        <div className='cart-product-quantity'>
                                            <button>
                                                <span className="material-symbols-outlined" onClick={() => handleDecreaseQuantity(index)}>
                                                    remove
                                                </span>
                                            </button>
                                            <span className='quantity-number'>{product.quantity}</span>
                                            <button>
                                                <span className="material-symbols-outlined" onClick={() => handleIncreaseQuantity(index)}>
                                                    add
                                                </span>
                                            </button>
                                        </div>
                                        <div className=''>
                                            <p>Giao hàng tiêu chuẩn</p>
                                            <select name="" id="">
                                                <option value="">1 tuần</option>
                                                <option value="">2 tuần</option>
                                                <option value="">3 tuần</option>
                                                <option value="">4 tuần</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='delete-button'>
                                        <Popconfirm
                                            placement="bottomRight"
                                            title={text}
                                            description={description}
                                            onConfirm={() => {
                                                handleDeleteProduct(product.productId)
                                            }}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            <button><span className="material-symbols-outlined">
                                                close
                                            </span></button>
                                        </Popconfirm>
                                    </div>
                                </div>)
                                : <div className='cart-empty-text'>Giỏ hàng của bạn trống</div>
                        }
                    </div>
                    <div className='cart-footer'>
                        <p className='cart-total'>
                            <span className='cart-total-lable'>Tổng ước tính</span>
                            <span className='cart-total-value'>{subTotal} VNĐ</span>
                        </p>
                        <button className='checkoutButton' onClick={() => navigate("/checkout")}>Thanh toán</button>
                        {/* <button className='checkoutButton' onClick={() => handleOrder()}>Checkout</button> */}
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

function Cart() {
    return (
        <>
            <OffCanvasExample placement="end" name="end" />
        </>
    );
}

export default Cart;
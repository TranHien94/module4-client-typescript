import {Route} from 'react-router-dom'
import Lazy from "@/utils/lazies/Lazy";

export default <>
    <Route path="/collections/:categoryId" element={Lazy(() => import("@/pages/product/collections/Product"))()}></Route>
    <Route path="/products/:id" element={Lazy(() => import("@/pages/product/productDetail/ProductDetail"))()}></Route>
    <Route path="/checkout" element={Lazy(() => import("@/pages/homes/components/Checkout/Checkout"))()}></Route>
    <Route path="/payment" element={Lazy(() => import("@/pages/homes/components/Payment/Payment"))()}></Route>
</>


import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/homes/Home";
import HomeLayout from "../pages/homes/components/HomeLayout/HomeLayout";
import RouteUser from "./RouteUser";
import RouteProduct from "./RouteProduct";

export default function RouteSetup() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<HomeLayout />}></Route>
                    {RouteProduct}
                    {RouteUser}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

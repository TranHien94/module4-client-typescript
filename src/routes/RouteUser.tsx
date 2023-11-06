
import { Route } from 'react-router-dom';
import Register from "@/pages/users/register/Register";
import Login from "@/pages/users/login/Login";

export default
<>
    <Route path="/register" element={<Register />}></Route>
    <Route path="/login" element={<Login />}></Route>
</>
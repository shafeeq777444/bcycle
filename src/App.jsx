import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Bikes from "./pages/Bikes";
import Accessories from "./pages/Accessories";

import About from "./pages/About";
import ProductView from "./pages/ProductView";
import CycleLoginPage from "./pages/Login";
import Cart from "./pages/Cart";
import MyOrders from "./pages/MyOrders";
import Register from "./pages/Register";
import HomeOutlets from "./outlets/HomeOutlets";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<CycleLoginPage />} />
                <Route path="/" element={<HomeOutlets/>}>
                    <Route index element={<Home />} />
                    <Route path="/bikes" element={<Bikes />} />
                    <Route path="/bikeAccessories" element={<Accessories />} />
                    <Route path="/:category/productview/:id" element={<ProductView />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/myorders" element={<MyOrders />} />
                    <Route path="/testing" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

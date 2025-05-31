import { useSelector } from "react-redux";
import axiosInstance from "../service/axiosInstance";
import { useEffect, useState } from "react";
import CartPage from "../components/CartComponent";

const Cart = () => {
    const[carts,setCarts]=useState([])
    const { id: userId } = useSelector((state) => state.user.user);
    useEffect(() => {
        (async function () {
            if(userId){
                const userRes = await axiosInstance.get(`/users/${userId}`);
            const cart = userRes.data.cart || [];
            setCarts(cart)
            console.log(cart)
            }
            
        })();
    }, [userId]);
console.log(carts)
    return <CartPage cartItems={carts} setCartItems={setCarts}></CartPage>;
};

export default Cart;

import { Minus, Plus, Trash2, ShoppingBag, Star, Diamond, Shield, Truck, CreditCard } from "lucide-react";
import { useNavigate } from "react-router";
import axiosInstance from "../service/axiosInstance";
import { useSelector } from "react-redux";
import PaymentModal from "./PaymentModal";
import toast from "react-hot-toast";

const CartPage = ({ cartItems = [], setCartItems }) => {
    const navigate = useNavigate();
    const { id: userId } = useSelector((state) => state.user.user);
    const updateQuantity = (id, newQuantity) => {
        if (newQuantity <= 0) {
            removeItem(id);
            return;
        }
        setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)));
    };

    const removeItem = (id) => {
        setCartItems((items) => items.filter((item) => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.offerPrice * item.quantity, 0);
    const shipping = subtotal > 50000 ? 0 : 0; // Free shipping for luxury items
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;
    console.log(total);

    const formatPrice = (price) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };
    const handleProceed = async (address) => {
        const id = Date.now();
        const neworder = { products: [...cartItems], total, id, address };
        const user = await axiosInstance.get(`/users/${userId}`);
        console.log(user.data, "asas");
        const updated = { ...user.data, orders: [...user.data.orders, neworder], cart: [] };
        console.log(updated, "--updt");
        await axiosInstance.patch(`/users/${userId}`, updated);
        navigate("/myorders");
        toast.success("Order Confirmed")
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
                    <p className="text-gray-600">Luxury cycling experiences await</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex items-center gap-3">
                                    <ShoppingBag className="w-6 h-6 text-amber-600" />
                                    {/* <h2 className="text-2xl font-bold text-gray-900">
                    Cart Items ({cartItems.length})
                  </h2> */}
                                </div>
                            </div>

                            <div className="divide-y divide-gray-200">
                                {cartItems.map((item) => (
                                    <div
                                        key={`${item.id}-${Math.random()}`}
                                        className="p-6 hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex gap-6">
                                            {/* Product Image */}
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={item.images[0]}
                                                    alt={item.name}
                                                    className="w-24 h-24 object-cover rounded-xl shadow-md"
                                                />
                                            </div>

                                            {/* Product Details */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-start mb-3">
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                                            {item.name}
                                                        </h3>
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <span
                                                                className={`px-2 py-1 text-xs font-medium rounded-full ${
                                                                    item.category === "Luxury"
                                                                        ? "bg-amber-100 text-amber-800"
                                                                        : "bg-blue-100 text-blue-800"
                                                                }`}
                                                            >
                                                                {item.category}
                                                            </span>
                                                            <div className="flex items-center gap-1">
                                                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                                <span className="text-sm text-gray-600">
                                                                    {item.rating} ({item.reviews})
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-wrap gap-1 mb-3">
                                                            {item.features.map((feature, idx) => (
                                                                <span
                                                                    key={idx}
                                                                    className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md"
                                                                >
                                                                    {feature}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                    >
                                                        <Trash2 className="w-5 h-5" />
                                                    </button>
                                                </div>

                                                {/* Price and Quantity */}
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex items-center bg-gray-100 rounded-lg">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="p-2 hover:bg-gray-200 rounded-l-lg transition-colors"
                                                            >
                                                                <Minus className="w-4 h-4" />
                                                            </button>
                                                            <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
                                                                {item.quantity}
                                                            </span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="p-2 hover:bg-gray-200 rounded-r-lg transition-colors"
                                                            >
                                                                <Plus className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-2xl font-bold text-gray-900">
                                                            {formatPrice(item.offerPrice * item.quantity)}
                                                        </div>
                                                        {item.originalPrice > item.price && (
                                                            <div className="text-sm text-gray-500 line-through">
                                                                {formatPrice(item.originalPrice * item.quantity)}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-8">
                            <div className="p-6 border-b border-gray-200">
                                <h2 className="text-2xl font-bold text-gray-900">Order Summary</h2>
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span className="font-medium">{formatPrice(subtotal)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="font-medium">{shipping === 0 ? "FREE" : formatPrice(shipping)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Tax</span>
                                    <span className="font-medium">{formatPrice(tax)}</span>
                                </div>
                                <div className="border-t border-gray-200 pt-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-xl font-bold text-gray-900">Total</span>
                                        <span className="text-3xl font-bold text-gray-900">{formatPrice(total)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Benefits */}
                            <div className="p-6 bg-gray-50 border-t border-gray-200">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <Shield className="w-5 h-5 text-green-500" />
                                        <span>Secure checkout guaranteed</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <Truck className="w-5 h-5 text-blue-500" />
                                        <span>{shipping === 0 ? "Free white-glove delivery" : "Standard shipping"}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <CreditCard className="w-5 h-5 text-purple-500" />
                                        <span>Flexible payment options</span>
                                    </div>
                                </div>
                            </div>

                            {/* Checkout Button */}
                            <div className="p-6 flex flex-col ">
                                <PaymentModal cartItems={cartItems} setCartItems={setCartItems} procees={handleProceed} />
                                {/* <button onClick={handleProceed} className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                 
                </button> */}
                                <p className="text-xs text-gray-500 text-center mt-3">
                                    By proceeding, you agree to our Terms & Conditions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Empty State (hidden when items exist) */}
                {cartItems.length === 0 && (
                    <div className="text-center py-16">
                        <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h3>
                        <p className="text-gray-600 mb-6">Add some luxury bikes to get started</p>
                        <button
                            onClick={() => {
                                navigate("/bikes");
                            }}
                            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-xl transition-colors"
                        >
                            Continue Shopping
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;

import React, { useEffect, useState } from "react";
import { Menu, X, ShoppingCart, Bike, User,Cog, Store, Box } from "lucide-react";
import { useNavigate } from "react-router";
import UserModal from "./UserModal";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, setUser } from "../features/users/userSlice";

const BikeNavbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartCount] = useState(3); // Example cart count
    const dispatch = useDispatch();

    const { isAuth, user } = useSelector((state) => state.user);
    console.log(user, "navbar");
    console.log(isAuth, "navbar--");
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    
    useEffect(() => {
        const isAuth = JSON.parse(localStorage.getItem("isAuth")) || false;
        if (isAuth) {
            const isUser = JSON.parse(localStorage.getItem("user"));
            dispatch(setUser(isUser));
        }
        dispatch(setAuth(isAuth));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuth]);
    
    console.log(user);
    
    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div 
                        onClick={() => { navigate('/') }} 
                        className="flex items-center space-x-3 cursor-pointer"
                    >
                        <Bike className="w-8 h-8 text-black" />
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">bcycle</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a
                                href="/bikes"
                                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-gray-100"
                            >
                                Shop Bikes
                            </a>
                            <a
                                href="/bikeAccessories"
                                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-gray-100"
                            >
                                Shop Accessories
                            </a>
                            <a
                                href="/about"
                                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-gray-100"
                            >
                                About
                            </a>
                            <a
                                href="/myorders"
                                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-gray-100"
                            >
                                Orders
                            </a>
                            <button 
                                onClick={() => { navigate('/cart') }}  
                                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2"
                            >
                                <ShoppingCart className="w-4 h-4" />
                                <span>Cart</span>
                            </button>
                        </div>
                    </div>

                    {/* Desktop User Section */}
                    <div className="hidden md:block">
                        {isAuth ? (
                            <UserModal />
                        ) : (
                            <button
                                onClick={() => navigate("/login")}
                                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200"
                            >
                                <User className="w-5 h-5 text-gray-600" />
                                <span className="text-gray-800 font-medium">Login</span>
                            </button>
                        )}
                    </div>

                    {/* Mobile menu button and cart */}
                    <div className="md:hidden flex items-center space-x-3">
                        {/* Mobile Cart */}
                        <button 
                            onClick={() => { navigate('/cart') }} 
                            className="relative p-2 text-gray-700 hover:text-black transition-colors duration-200 rounded-md hover:bg-gray-100"
                        >
                            <ShoppingCart className="h-6 w-6" />

                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="p-2 text-gray-700 hover:text-black transition-colors duration-200 rounded-md hover:bg-gray-100"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden">
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/30 bg-opacity-50 z-40 transition-opacity duration-300" 
                        onClick={closeMenu}
                    ></div>
                    
                    {/* Mobile Menu Content */}
                    <div className="absolute top-16 left-0 right-0 bg-white shadow-xl z-50 border-t border-gray-200">
                        <div className="px-4 py-6 space-y-1 max-h-screen overflow-auto">
                            {/* Navigation Links */}
                            <div className="space-y-2 mb-6">
                                <a
                                    href="/bikes"
                                    onClick={closeMenu}
                                    className="flex items-center text-gray-800 hover:text-black hover:bg-gray-50 px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 border-b border-gray-100"
                                >
                                    <span><Bike/></span>
                                    <span className="ml-3">Shop Bikes</span>
                                </a>
                                <a
                                    href="/bikeAccessories"
                                    onClick={closeMenu}
                                    className="flex items-center text-gray-800 hover:text-black hover:bg-gray-50 px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 border-b border-gray-100"
                                >
                                    <span><Cog/></span>
                                    <span className="ml-3">Shop Accessories</span>
                                </a>
                                <a
                                    href="/about"
                                    onClick={closeMenu}
                                    className="flex items-center text-gray-800 hover:text-black hover:bg-gray-50 px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 border-b border-gray-100"
                                >
                                    <span><Store/></span>
                                    <span className="ml-3">About</span>
                                </a>
                                <a
                                    href="/myorders"
                                    onClick={closeMenu}
                                    className="flex items-center text-gray-800 hover:text-black hover:bg-gray-50 px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 border-b border-gray-100"
                                >
                                    <span><Box/></span>
                                    <span className="ml-3">My Orders</span>
                                </a>
                            </div>

                            {/* Cart Button - Mobile */}
                            <div className="mb-6">
                                <button
                                    onClick={() => {
                                        navigate('/cart');
                                        closeMenu();
                                    }}
                                    className="w-full flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium text-base"
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                    <span>View Cart</span>

                                </button>
                            </div>

                            {/* User Section - Mobile */}
                            <div className="pt-4 border-t border-gray-200">
                                {isAuth ? (
                                    <div className="w-full">
                                        <UserModal />
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => {
                                            navigate("/login");
                                            closeMenu();
                                        }}
                                        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-100 transition-all duration-200 border border-gray-200 font-medium text-base"
                                    >
                                        <User className="w-5 h-5 text-gray-600" />
                                        <span className="text-gray-800">Login / Sign Up</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default BikeNavbar;
import React, { useState } from "react";
import { Heart, ChevronLeft, Star, ChevronDown, ChevronUp, ShoppingBag } from "lucide-react";
import axiosInstance from "../service/axiosInstance";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const ProductDetail = ({ product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const navigate=useNavigate()
  const [isShippingOpen, setIsShippingOpen] = useState(true);
const{id:userId}=useSelector(state=>state.user.user)
   const handleCart= async (newproduct)=>{

const userRes = await axiosInstance.get(`/users/${userId}`);
  const existingCart = userRes.data.cart || [];

  const updatedCart = [...existingCart, {...newproduct,quantity:1}];

  // Then patch the user with updated cart
  await axiosInstance.patch(`/users/${userId}`, {
    cart: updatedCart
  });
  navigate('/cart')
toast.success("Product added to cart!")

};
  const renderStars = (rating, size = "w-4 h-4") => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} transition-colors ${
              star <= Math.floor(rating)
                ? "fill-amber-400 text-amber-400"
                : star === Math.ceil(rating) && rating % 1 !== 0
                ? "fill-amber-400 text-amber-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      {/* Main layout */}
      <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Images */}
        {product.images && (
          <div className="lg:w-1/2 p-6">
            <div className="mb-6 relative group">
              <img
                src={product?.images[selectedImageIndex]}
                alt={product?.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg transition-transform group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl pointer-events-none"></div>
            </div>
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {product?.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-3 transition-all duration-300 transform hover:scale-105 ${
                    selectedImageIndex === index
                      ? "border-blue-500 shadow-lg shadow-blue-500/25"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product?.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Info */}
        <div className="lg:w-1/2 p-6 space-y-8">
          <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium rounded-full">
            {product.category}
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent leading-tight">
            {product.name}
          </h1>

          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              ${product.offerPrice}
            </span>
            {product.originalPrice && (
              <span className="text-xl text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-4">
            <div className="text-sm text-orange-800">
              Order before <span className="font-bold text-red-600">5:30 PM</span> to get
              next day delivery ⚡
            </div>
          </div>

          {/* Description */}
          <div className="border-t border-gray-200">
            <button
              onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
              className="flex items-center justify-between w-full text-left font-semibold py-4 text-gray-800 hover:text-blue-600 transition-colors"
            >
              <span className="text-lg">Description & Fit</span>
              <div className="p-1 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors">
                {isDescriptionOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </button>
            {isDescriptionOpen && (
              <div className="pb-4">
                <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
                  {product.description}
                </p>
              </div>
            )}
          </div>

          {/* Shipping */}
          <div className="border-t border-gray-200">
            <button
              onClick={() => setIsShippingOpen(!isShippingOpen)}
              className="flex items-center justify-between w-full text-left font-semibold py-4 text-gray-800 hover:text-blue-600 transition-colors"
            >
              <span className="text-lg">Shipping Options</span>
              <div className="p-1 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors">
                {isShippingOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </button>
            {isShippingOpen && (
              <div className="space-y-4 pb-4">
                <div className="flex items-center justify-between p-4 border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:shadow-md hover:border-green-300 transition-all cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white flex items-center justify-center mr-4 text-sm font-bold shadow-lg">
                      ✓
                    </div>
                    <div>
                      <div className="font-semibold text-green-800">
                        Standard Delivery
                      </div>
                      <div className="text-sm text-green-600">
                        3–5 business days
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    Save ₹50
                  </div>
                </div>
 
                <div className="flex items-center justify-between p-4 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:shadow-md hover:border-blue-300 transition-all cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-4 text-lg shadow-lg">
                      📦
                    </div>
                    <div>
                      <div className="font-semibold text-blue-800">
                        Express Delivery
                      </div>
                      <div className="text-sm text-blue-600">
                        Get it by Tomorrow
                      </div>
                    </div>
                  </div>
                </div>
                <button onClick={()=>handleCart(product)} className="bg-gradient-to-br from-zinc-900 to-zinc-800 text-white border-none rounded-xl px-[18px] py-[10px] text-sm font-semibold cursor-pointer flex items-center gap-2 transition-all duration-300 ease-out shadow-[0_5px_15px_rgba(0,0,0,0.1)] relative overflow-hidden hover:bg-gradient-to-br hover:from-zinc-800 hover:to-zinc-700 hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] group/btn max-sm:w-full max-sm:justify-center before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:transition-all before:duration-[600ms] before:ease-out hover:before:left-full">
            <span>Add to Cart</span>
            <ShoppingBag 
              size={20} 
              className="transition-transform duration-300 ease-out group-hover/btn:rotate-[-10deg] group-hover/btn:scale-110" 
            />
          </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-white rounded-2xl shadow-xl mt-8 p-8 space-y-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Rating & Reviews
        </h2>

        <div className="flex flex-col md:flex-row md:items-start gap-8">
          <div className="text-center bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-200">
            <div className="text-6xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              {product.rating}
            </div>
            <div className="text-lg text-gray-600 font-medium">/ 5</div>
            <div className="text-sm text-gray-500 mt-2">
              ({product.rating} New Reviews)
            </div>
          </div>

          <div className="flex-1 space-y-3">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-3">
                <span className="text-sm font-medium w-4">{star}</span>
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <div className="flex-1 bg-gray-200 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-yellow-400 to-amber-500 h-3 rounded-full transition-all duration-700 ease-out shadow-sm"
                    style={{
                      width: `${
                        star === 5
                          ? 70
                          : star === 4
                          ? 20
                          : star === 3
                          ? 5
                          : star === 2
                          ? 3
                          : 2
                      }%`,
                    }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 font-medium w-8">
                  {star === 5 ? '70%' : star === 4 ? '20%' : star === 3 ? '5%' : star === 2 ? '3%' : '2%'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Reviews */}
        <div className="space-y-6">
          {product?.feedback?.map((review) => (
            <div key={review.id} className="border-t border-gray-100 pt-6">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">{review.name}</h4>
                    <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded-full">
                      {review.date}
                    </span>
                  </div>
                  <div className="mb-3">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* You might also like */}
      <div className="bg-white rounded-2xl shadow-xl mt-8 p-8">
        {/* <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          You might also like
        </h2> */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Add related product cards here */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
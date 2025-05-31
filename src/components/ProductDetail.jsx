import React, { useState } from "react";
import { Heart, ChevronLeft, Star, ChevronDown, ChevronUp, ShoppingBag, Zap, Wrench, Shield, Gem } from "lucide-react";
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
                ? "fill-black text-black"
                : star === Math.ceil(rating) && rating % 1 !== 0
                ? "fill-black text-black"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-md hover:shadow-lg"
      >
        <ChevronLeft className="w-5 h-5" />
        <span className="font-medium">Back</span>
      </button>
      {/* Main layout */}
      <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Images */}
        {product.images && (
          <div className="lg:w-1/2 p-6">
            <div className="mb-6 relative group">
              <img
                src={product?.images[selectedImageIndex]}
                alt={product?.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg transition-transform group-hover:scale-[1.02] border border-gray-300"
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
                      ? "border-black shadow-lg shadow-black/25"
                      : "border-gray-200 hover:border-gray-400"
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
          <div className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-full">
            {product.category}
          </div>
          <h1 className="text-4xl font-bold text-black leading-tight">
            {product.name}
          </h1>

          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-black">
              ${product.offerPrice}
            </span>
            {product.originalPrice && (
              <span className="text-xl text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
            <div className="text-sm text-black">
              Order before <span className="font-bold text-black">5:30 PM</span> to get
              next day delivery ⚡
            </div>
          </div>

          {/* Description */}
          <div className="border-t border-gray-200">
            <button
              onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
              className="flex items-center justify-between w-full text-left font-semibold py-4 text-gray-800 hover:text-black transition-colors"
            >
              <span className="text-lg">Description & Fit</span>
              <div className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                {isDescriptionOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </button>
            {isDescriptionOpen && (
              <div className="pb-4">
                <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-200">
                  {product.description}
                </p>
              </div>
            )}
          </div>

          {/* Shipping */}
          <div className="border-t border-gray-200">
            <button
              onClick={() => setIsShippingOpen(!isShippingOpen)}
              className="flex items-center justify-between w-full text-left font-semibold py-4 text-gray-800 hover:text-black transition-colors"
            >
              <span className="text-lg">Shipping Options</span>
              <div className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                {isShippingOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </button>
            {isShippingOpen && (
              <div className="space-y-4 pb-4">
                <div className="flex items-center justify-between p-4 border-2 border-gray-300 bg-gray-50 rounded-xl hover:shadow-md hover:border-gray-400 transition-all cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-black rounded-full text-white flex items-center justify-center mr-4 text-sm font-bold shadow-lg">
                      ✓
                    </div>
                    <div>
                      <div className="font-semibold text-black">
                        Standard Delivery
                      </div>
                      <div className="text-sm text-gray-600">
                        3–5 business days
                      </div>
                    </div>
                  </div>
                  <div className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    Save $50
                  </div>
                </div>
 
                <div className="flex items-center justify-between p-4 border-2 border-gray-300 bg-gray-50 rounded-xl hover:shadow-md hover:border-gray-400 transition-all cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mr-4 text-lg shadow-lg">
                      📦
                    </div>
                    <div>
                      <div className="font-semibold text-black">
                        Express Delivery
                      </div>
                      <div className="text-sm text-gray-600">
                        Get it by Tomorrow
                      </div>
                    </div>
                  </div>
                </div>
                <button onClick={()=>handleCart(product)} className="bg-black text-white border-none rounded-xl px-[18px] py-[10px] text-sm font-semibold cursor-pointer flex items-center gap-2 transition-all duration-300 ease-out shadow-[0_5px_15px_rgba(0,0,0,0.1)] relative overflow-hidden hover:bg-gray-800 hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] group/btn max-sm:w-full max-sm:justify-center before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:transition-all before:duration-[600ms] before:ease-out hover:before:left-full">
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
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 mt-8 p-8 space-y-8">
        <h2 className="text-3xl font-bold text-black">
          Rating & Reviews
        </h2>

        <div className="flex flex-col md:flex-row md:items-start gap-8">
          <div className="text-center bg-gray-50 p-6 rounded-2xl border border-gray-200">
            <div className="text-6xl font-bold text-black">
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
                <Star className="w-4 h-4 text-black fill-black" />
                <div className="flex-1 bg-gray-200 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-black h-3 rounded-full transition-all duration-700 ease-out shadow-sm"
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
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-black rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">{review.name}</h4>
                    <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded-full border border-gray-200">
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

      {/* Brand Quality Section */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 mt-8 p-8">
        <h2 className="text-2xl font-bold text-center mb-8 text-black">
          Why Choose Our Cycles & Accessories?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Premium Materials */}
          <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="text-white w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg text-black mb-2">Premium Materials</h3>
            <p className="text-gray-600 text-sm">
              High-grade aluminum frames and carbon fiber components for maximum durability and performance.
            </p>
          </div>

          {/* Expert Craftsmanship */}
          <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="text-white w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg text-black mb-2">Expert Craftsmanship</h3>
            <p className="text-gray-600 text-sm">
              Precision-engineered by cycling professionals with over 25 years of industry experience.
            </p>
          </div>

          {/* Safety First */}
          <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-white w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg text-black mb-2">Safety First</h3>
            <p className="text-gray-600 text-sm">
              All products meet international safety standards with rigorous testing for reliability.
            </p>
          </div>

          {/* Lifetime Support */}
          <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <Gem className="text-white w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg text-black mb-2">Lifetime Support</h3>
            <p className="text-gray-600 text-sm">
              Comprehensive warranty and 24/7 customer support for all your cycling needs.
            </p>
          </div>
        </div>

        {/* Quality Stats */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-black mb-1">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-1">50K+</div>
              <div className="text-sm text-gray-600">Happy Riders</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-1">99%</div>
              <div className="text-sm text-gray-600">Quality Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-1">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';
import { useNavigate } from 'react-router';
import axiosInstance from '../service/axiosInstance';
import { useSelector } from 'react-redux';
import {  message } from 'antd';
import toast from 'react-hot-toast';

const ProductCard = ({product,category}) => {

  const navigate=useNavigate()
  const {id:userId}=useSelector(state=>state.user.user)
  console.log(userId,"-userID")
  const handleCart= async (newproduct)=>{
    if(!userId){
      toast.error("please login with your mail")
      return;
    }
toast.success('Product added to cart');
const userRes = await axiosInstance.get(`/users/${userId}`);
  const existingCart = userRes.data.cart || [];

  const updatedCart = [...existingCart, {...newproduct,quantity:1}];

  // Then patch the user with updated cart
  await axiosInstance.patch(`/users/${userId}`, {
    cart: updatedCart
  });
  
  navigate('/cart')


};
  return (
    <div   className="w-full md:w-[300px] lg:w-[340px] relative bg-white rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden  group">
      {/* Premium Badge */}
      <div className="absolute top-[15px] right-[15px] bg-gradient-to-br from-zinc-900 to-zinc-800 text-white px-3 py-[6px] text-xs font-semibold tracking-wider uppercase rounded-xl z-10 shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
        Premium
      </div>
      
      {/* Product Image */}
      <div onClick={()=>{navigate(`/${category}/productview/${product.id}`)}} className="h-[240px] overflow-hidden relative">
        <img 
          src={product?.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-[800ms] cubic-bezier(0.19,1,0.22,1) group-hover:scale-105"
        />
      </div>
      
      {/* Product Info */}
      <div className="p-[25px] relative">
        {/* Category */}
        <div className="text-xs font-semibold tracking-wider uppercase text-zinc-500 mb-2">
          {product?.category}
        </div>
        
        {/* Title */}
        <h2 className="text-xl h-10 font-bold text-zinc-900 mb-3 tracking-[-0.5px] leading-[1.2]">
           {product?.name}
        </h2>
        
        
        {/* Features */}
        <div onClick={()=>{navigate(`/${category}/productview/${product.id}`)}} className="flex flex-wrap gap-2 h-16 mb-5">
          <span className="text-[11px] bg-zinc-100 text-zinc-500 h-6 px-[10px] py-1 rounded-xl font-medium">
            {product?.features[0]}
          </span>
          <span className="text-[11px] bg-zinc-100 text-zinc-500 h-6 px-[10px] py-1 rounded-xl font-medium">
          {product?.features[1]}
          </span>
          <span className="text-[11px] bg-zinc-100 text-zinc-500 h-6 px-[10px] py-1 rounded-xl font-medium">
           {product?.features[2]}
          </span>
        </div>
        
        {/* Price and Button */}
        <div className="flex justify-between items-center mb-[15px] max-sm:flex-col max-sm:items-start max-sm:gap-[15px]">
          <div className="flex flex-col max-sm:mb-[5px]">
            <span className="text-sm line-through text-zinc-400 mb-[2px]">$ {product?.originalPrice}</span>
            <span className="text-[22px] font-bold text-zinc-900">$ {product?.offerPrice}</span>
          </div>
          
          <button onClick={()=>handleCart(product)} className="bg-gradient-to-br from-zinc-900 to-zinc-800 text-white border-none rounded-xl px-[18px] py-[10px] text-sm font-semibold cursor-pointer flex items-center gap-2 transition-all duration-300 ease-out shadow-[0_5px_15px_rgba(0,0,0,0.1)] relative overflow-hidden hover:bg-gradient-to-br hover:from-zinc-800 hover:to-zinc-700 hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] group/btn max-sm:w-full max-sm:justify-center before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:transition-all before:duration-[600ms] before:ease-out hover:before:left-full">
            <span>Add to Cart</span>
            <ShoppingBag 
              size={20} 
              className="transition-transform duration-300 ease-out group-hover/btn:rotate-[-10deg] group-hover/btn:scale-110" 
            />
          </button>
        </div>
        
        {/* Meta Information */}
        <div onClick={()=>{navigate(`/${category}/productview/${product.id}`)}} className="flex justify-between items-center border-t border-zinc-100 pt-[15px]">
          <div className="flex items-center gap-[2px]">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                size={16} 
                className="fill-yellow-400 stroke-yellow-400 stroke-[0.5]"
              />
            ))}
            <span className="ml-2 text-xs text-zinc-500">{product.reviews} Reviews</span>
          </div>
          <div className="text-xs font-semibold text-green-500">
            In Stock
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
import React, { useEffect, useState } from "react";
import axiosInstance from "../service/axiosInstance";
import { useParams } from "react-router";
import ProductDetail from "../components/ProductDetail";

const ProductDetailsContainer = () => {
    const {category,id}=useParams()
    const [product,setProduct]=useState({})
    console.log(category,id,"hhel")
    useEffect(() => {
        (async function () {
          const response=await  axiosInstance(`/${category}/${id}`);
          console.log(response)
          setProduct(response.data)
          console.log(response.data)
        })();
    }, [category, id]);
    return <ProductDetail product={product}/>;
};

export default ProductDetailsContainer;

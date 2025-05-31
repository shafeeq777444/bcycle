import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import axiosInstance from '../service/axiosInstance';
import BannerCarousel from '../components/Carousel';



const BikeListing = () => {
    const [bicycles,setBicycles]=useState([])
    useEffect(()=>{
        (async function(){
            const response=await axiosInstance('/bikes')
            setBicycles(response.data)
        })()

    },[])
  return (<>
      {/* <BannerCarousel/> */}
    <div className='grid md:grid-cols-4  gap-y-6 gap-x-4 my-6 mx-4'>
        {bicycles.map(bike=>(<ProductCard key={bike.id} product={bike} category={'bikes'}/>))}
    </div>
    </>
  )
}

export default BikeListing

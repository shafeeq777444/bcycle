import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import axiosInstance from '../service/axiosInstance';




const AccessoryListing = () => {
    const [accessories,setAccesories]=useState([])
    useEffect(()=>{
        (async function(){
            const response=await axiosInstance('/bikeAccessories')
            setAccesories(response.data)
        })()

    },[])
  return (
     <div className='grid md:grid-cols-4  gap-y-6 gap-x-4 my-6 mx-4'>
        {accessories.map(accessory=>(<ProductCard key={accessories.id} product={accessory} category={"bikeAccessories"}/>))}
    </div>
  )
}

export default AccessoryListing

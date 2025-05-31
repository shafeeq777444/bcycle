import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import axiosInstance from '../service/axiosInstance';
import { Skeleton } from 'antd';




const AccessoryListing = () => {
    const [accessories,setAccesories]=useState([])
      const [loading, setLoading] = useState(true);
    useEffect(()=>{
        (async function(){
          try{
const response=await axiosInstance('/bikeAccessories')
            setAccesories(response.data)
          }
          catch(er){
            console.log(er)
          }
          finally {
                setLoading(false);
            }
            
        })()

    },[])
    if(loading){
      return( <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: '24px',
    }}>
      {Array.from({ length: 10 }).map((_, i) => (
       <div
          key={i}
          style={{
            border: '1px solid #f0f0f0',
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
            background: '#fff',
            margin:"30px",
            width:"17rem",
            height:"31rem"
          }}
        >
          <div style={{ width: '100%', height: '180px', marginBottom: 16 }}>
            <Skeleton.Image
              active
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          <Skeleton active paragraph={{ rows: 2 }} />
        </div>
      ))}
    </div>)
    }
  return (
     <div className='grid md:grid-cols-4  gap-y-6 gap-x-4 my-6 mx-4'>
        {accessories.map(accessory=>(<ProductCard key={accessories.id} product={accessory} category={"bikeAccessories"}/>))}
    </div>
  )
}

export default AccessoryListing

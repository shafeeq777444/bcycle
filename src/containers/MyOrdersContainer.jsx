import React, { useEffect, useState } from 'react'
import OrderListing from '../components/OrderListing'
import axiosInstance from '../service/axiosInstance'
import { useSelector } from 'react-redux'
import { Skeleton } from 'antd'

const MyOrdersContainers = () => {
  const [loading,setLoading]=useState(true)
 const {id}= useSelector(state=>state.user.user)
    const [orders,setOrders]=useState([])
    useEffect(()=>{
       (async function(){
       const {data}=  await axiosInstance(`/users/${id}`)
        setOrders(data.orders)
        setLoading(false)
    } )()
        
    },[id])

    if(loading){
      return(
        <div
                 style={{
                   display: 'grid',
                   gridTemplateColumns: 'repeat(1, 1fr)', // default mobile view
                   gap: '20px',
                   padding: '20px',
                 }}
                 className="card-grid"
               >
                 {Array.from({ length: 10 }).map((_, i) => (
                   <div
                     key={i}
                     style={{
                       border: '1px solid #f0f0f0',
                       borderRadius: '8px',
                       padding: '16px',
                       boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                       background: '#fff',
                       width: '100%',
                       height: '31rem',
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
               </div>
      )
    }
  return (
    <div>
      <OrderListing orders={orders}/>
    </div>
  )
}

export default MyOrdersContainers

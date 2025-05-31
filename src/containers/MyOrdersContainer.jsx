import React, { useEffect, useState } from 'react'
import OrderListing from '../components/OrderListing'
import axiosInstance from '../service/axiosInstance'
import { useSelector } from 'react-redux'

const MyOrdersContainers = () => {
 const {id}= useSelector(state=>state.user.user)
    const [orders,setOrders]=useState([])
    useEffect(()=>{
       (async function(){
       const {data}=  await axiosInstance(`/users/${id}`)
        setOrders(data.orders)
    } )()
        
    },[id])
  return (
    <div>
      <OrderListing orders={orders}/>
    </div>
  )
}

export default MyOrdersContainers

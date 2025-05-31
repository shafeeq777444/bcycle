import React from 'react'
import SearchModal from '../components/Search'
import BikeNavbar from '../components/Navbar'
import { Outlet } from 'react-router'

const HomeOutlets = () => {
  return (
    <div>
        <BikeNavbar></BikeNavbar>
        <Outlet/>
      <SearchModal></SearchModal>
    </div>
  )
}

export default HomeOutlets

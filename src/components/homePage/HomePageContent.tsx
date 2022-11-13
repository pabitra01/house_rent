import React, { useState } from 'react'
import Filters from './filters/Filters'
import SearchBar from './filters/SearchBar'
import Navbar from './navbar/Navbar'
import Houses from './rentHouses/Houses'

const HomePageContent = () => {
  const [location,setLocation]=useState('');
  const [price,setPrice]=useState('0');
  const [propertyType,setProperty]=useState('');
  const [beds,setBeds]=useState('0');
  const [searchValue,setSearchValue]=useState('');
  console.log(location,price,propertyType,beds);
  
  return (
    <div className="bg-[#EFF8FF] min-h-screen">
            <Navbar/>
        <div className="container mx-auto">
            <SearchBar setSearchValue={setSearchValue}/>
            <Filters setLocation={setLocation} setPrice={setPrice} setProperty={setProperty} setBed={setBeds}/>
            <Houses location={location} price={price} property={propertyType} bed={beds} searchValue={searchValue}/>
        </div>
    </div>
  )
}

export default HomePageContent
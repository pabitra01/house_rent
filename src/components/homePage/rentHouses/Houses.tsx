import React from 'react'
import { Data } from '../../../data/HousesData'
import HouseIndivisualCard from './HouseIndivisualCard'

const Houses = (props:HouseProps) => {
  const {location,price,bed,property,searchValue}=props;
  return (
    <div className='px-8 lg:px-16 grid grid-cols-6 gap-10 justify-center pb-20'>
      {searchValue!=='' ? (
        Data.filter((ele)=>{
          if(ele.name.toLowerCase().includes(searchValue) || ele.location.toLowerCase().includes(searchValue)){
            return true;
          }else{
            return false;
          }
        }).map((ele,i)=>(
           <HouseIndivisualCard data={ele} key={i}/>
        ))
      ):(
        Data.filter((ele)=>{
          if(ele.location===location || location===''){
            return true;
          }else{
            return false
          }}).filter((ele)=>{
            if(parseInt(price)===0|| ele.price <= parseInt(price)){
              return true;
            }else{
              return false
            }
          }).filter((ele)=>{
            if(property===''|| ele.property_type===property){
              return true
            }else{
              return false
            }
          }).filter((ele)=>{
            if(parseInt(bed)===0|| ele.beds===parseInt(bed)){
              return true;
            }else{
              return false
            }
          }).map((ele,i)=>(
           <HouseIndivisualCard data={ele} key={i}/>
         ))
      )}
     
    </div>
  )
}

export default Houses
type HouseProps={location:string,price:string,bed:string,property:string,searchValue:string}
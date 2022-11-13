import React from 'react'
import { BedsData, locationData, priceData, propertyTypeData } from '../../../data/optionData'
import IndivisualFilter from './IndivisualFilter'
import { MdLocationPin} from 'react-icons/md'
import {HiCurrencyDollar} from 'react-icons/hi'
import {BsFillHouseDoorFill} from 'react-icons/bs'
import {FaBed} from 'react-icons/fa'

const Filters = (props:FilterProps) => {
    const {setLocation,setBed,setPrice,setProperty}=props
    const onResetFilter=()=>{
        window.location.reload()
    }
  return (
    <div className='px-8 lg:px-16 py-10 '>
        <div className="w-full flex lg:flex-row flex-col rounded-2xl shadow-2xl shadow-[#892CDC]/10">
           <IndivisualFilter setData={setLocation} optionData={locationData} title="Location" Icon={MdLocationPin}/>
           <IndivisualFilter setData={setPrice} optionData={priceData} title="Price" Icon={HiCurrencyDollar}/>
           <IndivisualFilter setData={setProperty} optionData={propertyTypeData} title="Property" Icon={BsFillHouseDoorFill}/>
           <IndivisualFilter setData={setBed} optionData={BedsData} title="Bed" Icon={FaBed}/>
            <div className="flex lg:w-1/5 w-full lg:pb-0 pb-5 bg-white justify-center items-center rounded-r-lg">
                <button className="py-2 px-8 bg-[#892CDC] rounded-full text-white font-medium" onClick={onResetFilter}>Reset</button>
            </div>
        </div>
    </div>
  )
}

export default Filters
type FilterProps={setLocation:Function,setPrice:Function,setBed:Function,setProperty:Function}
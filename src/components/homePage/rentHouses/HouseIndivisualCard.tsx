import React from 'react'
import { MdLocationPin} from 'react-icons/md'
import { IHouseData } from '../../../interface/houses'

const HouseIndivisualCard = (props:HouseIndivisualCardProps) => {
    const {data}=props
  return (
    <div className='w-full lg:col-span-2 md:col-span-3 col-span-6 bg-white rounded-2xl shadow-2xl shadow-[#892CDC]/10'>
        <div className="">
            <img src={data.image} alt="" className='w-full h-60 bg-cover rounded-t-2xl' />
        </div>
        <div className="px-8 py-4">
            <div className="">
                <div className="mb-2"><span className='font-bold text-[20px] text-[#892CDC]'>${data.price} </span><span className='text-black/60 font-medium'>/month</span></div>
                <div className="font-medium text-[20px] mb-1">{data.name}</div>
            </div>
            <div className="flex items-center gap-2  mb-2">
                <div className="text-[#892CDC]"><MdLocationPin/></div>
                <div className="font-medium text-black/60"> {data.location}</div>
            </div>
            <div className="w-full h-[1px] bg-[#892CDC]/30"></div>
            <div className="flex justify-between my-3">
                <div className="font-bold text-[14px] text-black/60">{data.bathroom} bathrooms</div>
                <div className="font-bold text-[14px] text-black/60">{data.beds} beds</div>
                <div className="font-bold text-[14px] text-black/60">{data.sqfeet} mxm</div>
            </div>
        </div>
    </div>
  )
}

export default HouseIndivisualCard
type HouseIndivisualCardProps={ data : IHouseData}
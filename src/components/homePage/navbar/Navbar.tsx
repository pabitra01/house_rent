import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="shadow-2xl shadow-[#892CDC]/10">
        <div className='container mx-auto w-full h-16 bg-[#EFF8FF] md:px-16 px-8 flex justify-between items-center '>
            <div className="font-bold text-lg text-[#892CDC]">Estatery</div>
            <button className="py-1 px-5 border-2 border-[#892CDC] rounded-full font-medium">Login</button>
        </div>
    </div>
    <div className="h-[1px] w-full shadow-xl"></div>
    </>
  )
}

export default Navbar
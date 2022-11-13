import React from 'react'

const SearchBar = (props:SearchBarProps) => {
  const {setSearchValue} =props;
  return (
    <div className=' pt-10 lg:px-16 px-8'>
        <div className="flex md:flex-row flex-col justify-between md:items-end items-center">
            <div className="md:text-[30px] text-[20px] md:mb-0 mb-5 font-medium ">Search properties to rent</div>
            <div className="">
                <input type="text" name="search" onChange={(e)=>setSearchValue(e.target.value)} placeholder='Search' id="" className='bg-white outline-none focus:ring-0 py-2 px-10 w-80 rounded-full font-medium'/>
            </div>
        </div>
    </div>
  )
}

export default SearchBar
type SearchBarProps={setSearchValue:Function}
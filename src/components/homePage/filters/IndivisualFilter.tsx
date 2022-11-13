import React from 'react'

const IndivisualFilter = (props:IndivisualFilterProps) => {
    const {setData,optionData,title,Icon}=props
  return (
    <div className="flex lg:w-1/5 w-full bg-white justify-between items-center rounded-l-lg">
        <div className=" flex flex-col justify-center pl-10 py-5">

            <div className=" flex items-center gap-2">
                <div className="text-[#892CDC]"><Icon/></div>
                <div className="text-black/40 font-medium">{title}</div>
            </div>
            <div className=" my-2">
                <select name="location" id="selectElement" className='focus:ring-0 outline-none font-medium' onChange={(e)=>setData(e.target.value)}>
                            <option value="" id="firstOpt" className=" font-medium" >
                            Select {title}
                            </option>
                        {optionData.map((ele,i)=>(
                            <option value={ele} key={i} className=" font-medium" >
                            {title==='Price' ? '< '+ele :ele}
                            </option>
                        ))}
                    </select>
            </div>
        </div>
    <div className="h-10 w-0.5 bg-[#892CDC] rounded-full"></div>
</div>
  )
}

export default IndivisualFilter
type IndivisualFilterProps={setData:Function,optionData:Array<any>,title:string,Icon:any}
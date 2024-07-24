import React from 'react';
import { FaHome } from "react-icons/fa";

const Body = (props) => {
  return (
  <>
        {/* left sided navbar */}
        <div className='flex justify-start items-start'>

       
        {
        props.isHamOpen ? (

            <div className="w-[15vw]  sm:w-[10vw] lg:w-[5vw] flex flex-col justify-center items-center gap-[40px] pt-[10px] ">
<div className="flex flex-col justify-center items-center px-[5px]">
<FaHome className="text-sm sm:text-lg lg:text-2xl"/>
<h2 className="text-xs sm:text-base">Home</h2>
</div>
<div className="flex flex-col justify-center items-center px-[5px]">
<FaHome className="text-sm sm:text-lg lg:text-2xl"/>
<h2 className="text-xs sm:text-base">Home</h2>
</div>
<div className="flex flex-col justify-center items-center px-[5px]">
<FaHome className="text-sm sm:text-lg lg:text-2xl"/>
<h2 className="text-xs sm:text-base">Home</h2>
</div>
<div className="flex flex-col justify-center items-center px-[5px]">
<FaHome className="text-sm sm:text-lg lg:text-2xl"/>
<h2 className="text-xs sm:text-base">Home</h2>
</div>
      </div>
        ): 
        (
            <div className="w-[15vw]  sm:w-[10vw] lg:w-[15vw] flex flex-col justify-center items-center gap-[40px] pt-[10px]">
<div className="flex flex-col justify-center items-center px-[5px]">
<FaHome className="text-sm sm:text-lg lg:text-2xl"/>
<h2 className="text-xs sm:text-base">Home</h2>
</div>
      </div>
        )
      }
      <div>
        Bodyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      </div>
       </div>
  </>
  )
}

export default Body;
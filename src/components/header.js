import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { MdOutlineVideocam } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import logo from "../assets/images/logo.png";
import {useState} from "react";
const Header = () => {
    const [isHamOpen, setIsHamOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center py-[10px] lg:py-[20px] px-[10px] lg:px-[30px]">
        {/* hamburger part */}
        <div className="flex justify-center items-center gap-[10px]">
          <div className="  w-[40px] h-[40px] rounded-full flex justify-center items-center hover:bg-slate-900 rounded-full hidden lg:flex cursor-pointer" >
            <RxHamburgerMenu className="text-lg" onClick= {() => {
            setIsHamOpen(!isHamOpen);
          }}/>
          </div>
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            }
            alt="Logo"
            className="w-[80px]  lg:w-[100px] cursor-pointer"
          />
        </div>

        {/* search part */}
        <div className="flex lg:gap-[20px] justify-center items-center">
          <div className="flex ">
            <input
              type="text"
              placeholder="search"
              className="w-[40vw] sm:w-[40vw] px-[20px] py-[5px] bg-[#121212] border-2 border-white rounded-l-2xl outline-cyan-100 h-[50px]"
            />
            <button className="w-[60px] px-[20px] py-[5px] text-[30px] bg-[#121212] border-2 border-l-0 border-white rounded-r-2xl outline-none h-[50px] flex justify-center items-center">
              <CiSearch />
            </button>
          </div>
          <div className="w-[50px] h-[50px] bg-[#3D3D3D] rounded-s-full flex justify-center items-center hover:bg-slate-900 rounded-full cursor-pointer  hidden lg:flex">
            <FaMicrophone className="text-lg" />
          </div>
        </div>

        {/* profile part */}
        <div className="flex justify-center items-center gap-[15px] text-2xl">
          <MdOutlineVideocam className="cursor-pointer hidden lg:block" />
          <IoMdNotificationsOutline className="cursor-pointer hidden lg:flex" />
          <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer rounded-full">
            <img
              src={"https://fps.cdnpk.net/home/categories/ai.webp"}
              className="w-[100%] h-[100%] object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* left sided navbar */}
      {
        isHamOpen ? (

            <div className="w-[15vw]  sm:w-[10vw] lg:w-[5vw] flex flex-col justify-center items-center gap-[40px] pt-[10px]">
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
            <div className="w-[15vw]  sm:w-[10vw] lg:w-[5vw] flex flex-col justify-center items-center gap-[40px] pt-[10px]">
<div className="flex flex-col justify-center items-center px-[5px]">
<FaHome className="text-sm sm:text-lg lg:text-2xl"/>
<h2 className="text-xs sm:text-base">Home</h2>
</div>
      </div>
        )
      }
      
    </>
  );
};
export default Header;

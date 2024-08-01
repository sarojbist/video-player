import React from "react";
import { FaHome } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Video from "./video";
import { API_KEY } from "../data";

const Body = ({isHamOpen, category, setCategory}) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&videoCategoryId=${category}&maxResults=20&key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVideos(data.items);
      })
      .catch((error) => {
        console.log(error);
        setVideos([]);
      });
  }, [category]);
  return (
    <>
      {/* left sided navbar */}
      <div className="flex justify-start items-start w-full relative">
        {isHamOpen ? (
          <div className="w-[15vw]  sm:w-[10vw] lg:w-[12%] flex flex-col justify-center items-center gap-[10px] p-[5px] sticky top-0">
            <div className={`flex flex-col justify-center items-center cursor-pointer px-[5px] py-[10px] w-[100%] rounded-lg hover:bg-[#272727] group ${category == 0 ? "bg-[#272727]" : ""}`} onClick={() => setCategory(0)}>
              <FaHome className={`text-sm sm:text-lg lg:text-lg text-gray-400 group-hover:text-white ${category == 0 ? "text-white" : ""}`} />
              <h2 className="text-xs sm:text-xs">Home</h2>
            </div>
            <div className={`flex flex-col justify-center items-center cursor-pointer px-[5px] py-[10px] w-[100%] rounded-lg hover:bg-[#272727] group ${category == 42 ? "bg-[#272727]" : ""}`} onClick={() => setCategory(42)}>
              <FaHome className={`text-sm sm:text-lg lg:text-lg text-gray-400 group-hover:text-white ${category == 42 ? "text-white" : ""}`} />
              <h2 className="text-xs sm:text-xs">Shorts</h2>
            </div>
           
            <div className={`flex flex-col justify-center items-center cursor-pointer px-[5px] py-[10px] w-[100%] rounded-lg hover:bg-[#272727] group ${category == 20 ? "bg-[#272727]" : ""}`} onClick={() => setCategory(20)}>
              <FaHome className={`text-sm sm:text-lg lg:text-lg text-gray-400 group-hover:text-white ${category == 20 ? "text-white" : ""}`} />
              <h2 className="text-xs sm:text-xs">Gaming</h2>
            </div>
            <div className={`flex flex-col justify-center items-center cursor-pointer px-[5px] py-[10px] w-[100%] rounded-lg hover:bg-[#272727] group ${category == 10 ? "bg-[#272727]" : ""}`} onClick={() => setCategory(10)}>
              <FaHome className={`text-sm sm:text-lg lg:text-lg text-gray-400 group-hover:text-white ${category == 10 ? "text-white" : ""}`} />
              <h2 className="text-xs sm:text-xs">Music</h2>
            </div>
          </div>
        ) : (
          <div className="w-[15vw]  sm:w-[10vw] lg:w-[30%] flex flex-col justify-start items-start gap-[10px] pt-[10px] sticky top-0 px-[10px] ">
            {/* long format first menu */}
            <div className={`flex justify-left items-center lg:px-[10px] gap-[20px] cursor-pointer  w-[100%] py-[8px] rounded-lg hover:bg-[#272727] group ${category == 0 ? "bg-[#272727]" : ""}`} onClick={() => setCategory(0)}>
              <FaHome className={`text-sm sm:text-lg lg:text-xl text-gray-400 group-hover:text-white ${category == 0 ? "text-white": ""}`}/>
              <h2 className="text-xs sm:text-base">Home</h2>
            </div>
            {/* first menu end */}

            <div className={`flex justify-left items-center lg:px-[10px] gap-[20px] cursor-pointer  w-[100%] py-[8px] rounded-lg hover:bg-[#272727] group ${category == 42 ? "bg-[#272727]" : ""}`} onClick={() => setCategory(42)}>
              <FaHome className={`text-sm sm:text-lg lg:text-xl text-gray-400 group-hover:text-white ${category == 42 ? "text-white": ""}`}/>
              <h2 className="text-xs sm:text-base">Shorts</h2>
            </div>

            <div className="flex justify-left items-center lg:px-[10px] gap-[20px] cursor-pointer  w-[100%] py-[8px] hover:rounded-lg hover:bg-[#272727] group">
              <FaHome className="text-sm sm:text-lg lg:text-xl text-gray-400 group-hover:text-white" />
              <h2 className="text-xs sm:text-base">Music</h2>
            </div>
            <div className="flex justify-left items-center lg:px-[10px] gap-[20px] cursor-pointer  w-[100%] py-[8px] hover:rounded-lg hover:bg-[#272727] group">
              <FaHome className="text-sm sm:text-lg lg:text-xl text-gray-400 group-hover:text-white" />
              <h2 className="text-xs sm:text-base">Gaming</h2>
            </div>
            <div className="w-[100%] h-[2px] bg-white"></div>
          </div>
        
        )}
        <div className={`grid gap-x-[10px] gap-y-[30px] ${isHamOpen? "lg:grid-cols-4" : "lg:grid-cols-3" }`}>
          {videos.map((video, index) => (
          <Link key={video.id} to={`video/${video.snippet.categoryId}/${video.id}`} >
          <Video video={video} />
          </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;

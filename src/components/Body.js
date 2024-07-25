import React from "react";
import { FaHome } from "react-icons/fa";
import { useState, useEffect } from "react";
import Video from "./video";

const Body = (props) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=20&key=AIzaSyC1DNJU2dZ5ZDs7tbieny7gUBAFyiqv2ac"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVideos(data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {/* left sided navbar */}
      <div className="flex justify-start items-start w-[100vw]">
        {props.isHamOpen ? (
          <div className="w-[15vw]  sm:w-[10vw] lg:w-[5vw] flex flex-col justify-center items-center gap-[40px] pt-[10px] ">
            <div className="flex flex-col justify-center items-center px-[5px]">
              <FaHome className="text-sm sm:text-lg lg:text-2xl" />
              <h2 className="text-xs sm:text-base">Home</h2>
            </div>
            <div className="flex flex-col justify-center items-center px-[5px]">
              <FaHome className="text-sm sm:text-lg lg:text-2xl" />
              <h2 className="text-xs sm:text-base">Home</h2>
            </div>
            <div className="flex flex-col justify-center items-center px-[5px]">
              <FaHome className="text-sm sm:text-lg lg:text-2xl" />
              <h2 className="text-xs sm:text-base">Home</h2>
            </div>
            <div className="flex flex-col justify-center items-center px-[5px]">
              <FaHome className="text-sm sm:text-lg lg:text-2xl" />
              <h2 className="text-xs sm:text-base">Home</h2>
            </div>
          </div>
        ) : (
          <div className="w-[15vw]  sm:w-[10vw] lg:w-[15vw] flex flex-col justify-center items-center gap-[40px] pt-[10px]">
            <div className="flex flex-col justify-center items-center px-[5px]">
              <FaHome className="text-sm sm:text-lg lg:text-2xl" />
              <h2 className="text-xs sm:text-base">Home</h2>
            </div>
          </div>
        )}
        <div className="flex flex-wrap gap-[20px]">
          {videos.map((video) => (
           <Video key={video.id} video={video}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;

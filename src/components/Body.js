import React from "react";
import { FaHome } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Video from "./video";
import { API_KEY } from "../data";
import LeftNavbar from "./leftNavbar";

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
        <LeftNavbar isHamOpen={isHamOpen} category={category} setCategory={setCategory}/>
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

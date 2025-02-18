import React, { useState, useEffect } from 'react';
import { API_KEY } from "../data";
import { BiLike } from "react-icons/bi";
import {convertLikes} from "../utils/convertLikes";

const PlayVideo = ({ videoId }) => {
  const [video, setVideo] = useState("");
  const [channelId, setChannelId] = useState("");
  const [channelLogo, setChannelLogo] = useState("");
  const [channelStats, setChannelStats] = useState("");
  useEffect(() => {
    if (!videoId) return;

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideo(data);
        setChannelId(data.items[0].snippet.channelId);
        console.log("channel Id: ", channelId)
      })
      .catch((error) => {
        setVideo([videoId]);
      });

  }, [videoId]);

  // fetching logo
useEffect(() => {
  if (!channelId) return;
  const fetchChannelLogo = async () => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=AIzaSyC1DNJU2dZ5ZDs7tbieny7gUBAFyiqv2ac`);
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      setChannelLogo(data.items[0].snippet.thumbnails.default.url);
      setChannelStats(data);
      console.log("channel logo : ",channelId)
    }
  };
  fetchChannelLogo();
},[channelId])

  return (
    <div className='w-[100%]'>
      {/* <video src={vdo} controls autoPlay muted className='w-[100%]'/> */}
      <iframe
        className='w-[100%] h-[500px]'
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      {video && video.items[0].snippet && (
        <>
        <div>
        <h2 className='font-medium'>{video.items[0].snippet.title}</h2>

 <div className='flex justify-between items-center'>
  <div className='flex justify-start items-center'>
    <img src={channelLogo} className='w-[50px] rounded-full'/>
    <div className='flex flex-col justify-center items-center'>
    <h2>{video.items[0].snippet.channelTitle}</h2>
    <h2>{channelStats && channelStats.items[0].statistics.subscriberCount}</h2>
    </div>
    <button className='border-white '>Subscribe</button>
  </div>

  <div className='flex justify-start gap-[10px]'> 
    <div className='bg-[#272727]'>
      <button><BiLike />{video && convertLikes(video.items[0].statistics.likeCount)}</button>
      <button></button>
    </div>
    <div>
      <button>Share</button>
    </div>
    <div>
      <button>Download</button>
    </div>
  </div>
 </div>
        </div>
          
        </>
      )}
    </div>
  )
}
export default PlayVideo;
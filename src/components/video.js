import React, {useState, useEffect} from "react";
import VideoFeed from "./VideoFeed";
const Video = ({ video }) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const thumbnail = thumbnails.medium.url;
  const views = video.statistics.viewCount;
  const [channelLogo, setChannelLogo] = useState('');

  useEffect(() => {
    // for logo only
    const fetchChannelLogo = async () => {
      const channelId = video.snippet.channelId;
      const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyC1DNJU2dZ5ZDs7tbieny7gUBAFyiqv2ac`);
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        setChannelLogo(data.items[0].snippet.thumbnails.default.url);
      }
    };

    fetchChannelLogo();
  }, [video]);

  return (
    <div className="w-[100%] flex flex-col gap-[10px] cursor-pointer">
      <img src={thumbnail} alt={title} className="w-[100%] h-[auto] object-cover rounded-lg"  />
      <div className="flex justify-start items-start gap-[10px]">
        {/* logo side */}
        <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center">
  <img src={channelLogo} className="w-full h-full rounded-full object-cover" alt="Channel Logo"/>
</div>

        <div className="flex flex-col gap-[4px]">
          <h2 className="text-sm font-bold">{title}</h2>
          <h2 className="text-xs text-slate-600">{channelTitle}</h2>
          <div className="flex text-xs text-slate-600">
      {(views / 1000).toFixed(1)}k views - {new Date(publishedAt).toLocaleDateString()}
    </div>
        </div>
      </div>
    </div>
  );
};

export default Video;

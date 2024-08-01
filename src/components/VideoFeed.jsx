import { useParams } from "react-router-dom";
import PlayVideo from "./playVideo";
import RecommendVideo from "./recommendVideo";
const VideoFeed = () => {
    const {categoryId, videoId} = useParams();
    return (
        
        <>
        <div className="grid grid-cols-[60vw_auto] gap-[2.5vw] px-[5vw]">
            <PlayVideo videoId={videoId} />
            <RecommendVideo />
        </div>
        </>
    )
}
export default VideoFeed;
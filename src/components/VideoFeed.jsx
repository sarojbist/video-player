import { useParams } from "react-router-dom";
import PlayVideo from "./playVideo";
import RecommendVideo from "./recommendVideo";
import LeftNavbar from "./leftNavbar";
const VideoFeed = ({ isHamOpen, category, setCategory }) => {
    const { categoryId, videoId } = useParams();
    return (

        <>
            {/* <LeftNavbar isHamOpen={isHamOpen} category={category} setCategory={setCategory} /> */}
            <div className="grid grid-cols-[60vw_auto] gap-[2.5vw] px-[5vw]">
                <PlayVideo videoId={videoId} />
                <RecommendVideo />
            </div>
        </>
    )
}
export default VideoFeed;
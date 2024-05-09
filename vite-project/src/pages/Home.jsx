import YtVideo from "../components/YtVideo";
import { ytPlaylist } from "../../youtubeApi"
import YouTube from "react-youtube";
import {
    useLoaderData
} from "react-router-dom"

export function loader({ params, request }) {
    return ytPlaylist()
}

export default function Home () {

    const YtVideos = useLoaderData().data.items;
    console.log(YtVideos);
    const YtVideoElements = YtVideos.map(video => {
        return (
            <YtVideo 
                videoId={video.snippet.resourceId.videoId}
                title={video.snippet.title} 
                key={video.id}>
            </YtVideo>
        )
    })

    return (
        <div className="home-container">
            This is home
            {YtVideoElements}
        </div>
    )
}
import YouTube from "react-youtube";

export default function YtVideo ({ videoId, title }) {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };
    return (
        <>
            <p>{title}</p>
            <YouTube videoId={videoId} opts={opts} />
        </>
    );
};
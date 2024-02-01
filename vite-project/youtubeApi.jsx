import React from 'react';
import axios from 'axios';

export async function ytPlaylist () {
  const apiKey = 'AIzaSyBh352aPtGQpR2BH3zjCGQZKlX4_9TKNgk';
  const playlistId = 'PL7DqV_jV_waaM4KVmw68fcwHRESXjwBF3';
  const maxResults = 50;

  const res = await axios.get(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId
    }&maxResults=${maxResults
    }&key=${apiKey}`
  );

  return res;

  // const opts = {
  //   width: "560",
  //   height: "315"
  // }
  // const videoElements = videos.map((video) => (
  //   <li key={video.id.videoId}>
  //     {/* <Youtube videoId={video.snippet.resourceId.videoId} opts={opts}></Youtube> */}
  //     {/* <iframe
  //       title={video.snippet.title}
  //       width="560"
  //       height="315"
  //       src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
  //       allowFullScreen
  //     ></iframe> */}
  //     <p>{video.snippet.title}</p>
  //   </li>
  // ))

  // return (
  //   <div>
  //     <h1>Latest Videos</h1>
  //     <ul>
  //       {}
  //     </ul>
  //   </div>
  // );
};


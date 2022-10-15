import React from "react";
import YouTube from "react-youtube";
function selectVideo(videoIdObj, onSelectedVideo) {
    onSelectedVideo(videoIdObj.videoId);
}
function getCss(imageurl) {
  const _styles = {
    backgroundImage: `url(${imageurl})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "180px",
    position: "relative"
  };
  return _styles;
}
function constructVideoTitles(vidoesData, onSelectedVideo) {
  return vidoesData.map(({ snippet, id }, index) => {
    return (
      <div
        key={index}
        onClick={() => selectVideo(id, onSelectedVideo)} className='flex-col w-2/4' >
        <div style={getCss(snippet.thumbnails.high.url)}  key={index} />
        <p className="title">{snippet.title}</p>
      </div>
    );
  });
}
const Video = ({ data, onSelectedVideo }) => {
  return <>{constructVideoTitles(data, onSelectedVideo)}</>;
};
 
export default Video;
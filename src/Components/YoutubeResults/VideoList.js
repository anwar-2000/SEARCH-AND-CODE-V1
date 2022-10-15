import React from 'react'
import Video from './Video'

const VideoList = ({data,onSelectedVideo}) => {
  return (
    <div>
                <h5>VIDEOS LIST : </h5>
                <Video data={data} onSelectedVideo={onSelectedVideo} />
    </div>
  )
}

export default VideoList
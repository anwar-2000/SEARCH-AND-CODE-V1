import React, { useState } from 'react'
import SearchYoutube from './SearchYoutube'
import YoutubeApi from './ApiYoutube'

const MainYoutube = () => {
     //states for video infos and selected video id 
     const [videosMetaData , setVideoMetaData] = useState([]);
     //const [selectedVideo , setSelectedVideo] = useState(null);


    const onSearch = async (title) =>{
          if(title ==='' || title === undefined){return ;}
          
            const response = await YoutubeApi.get("/search",{
                params:{
                    q:title 
                }
            });
              const videos = [];
            await response.data.items.map((el) => 
 
                        videos.push({
                        id : el.id.videoId 
                    })
                   )
                
            // setVideoMetaData(response.data.items);
            setVideoMetaData(videos);
            
              console.log(videos);
            console.log(videos.map((id)=>(id.id)));

                }
                
                return (
                  <div>
                          <SearchYoutube onSearch={onSearch} />
                          <div className='flex-col justify-center items-center'>
                          {
                            videosMetaData.map((id,index) => {
                                    return (
                                    <center>  <iframe className='py-5' key={index} title="youtube" id="ytplayer" type="text/html" width="640" height="360" src={'https://www.youtube.com/embed/' + id.id + '?autoplay=0&origin="anonymous"'}  frameBorder="0"></iframe></center>
                                    )
                          })}
                          </div>
                        
                  </div> ) }
  


export default MainYoutube;
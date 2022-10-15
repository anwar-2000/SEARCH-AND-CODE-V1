import axios from "axios";

const KEY = "AIzaSyBB67LwDJp2wkXKQLmxYuE0CNlYcHYUSnk";



export default axios.create({
    baseURL  : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 15 , 
        key : KEY
    },
    headers : {}
    
});
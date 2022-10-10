// FULL URL :
// https://www.googleapis.com/customsearch/v1?key=%20AIzaSyAO_nIp-z9monNvF-rQoKhkC9D5j7x9SxI%20&cx=65533adef18cf46d4&q=algeria

import { createSlice } from "@reduxjs/toolkit";

const FetchingSlice = createSlice({
    name : 'googleSearchSlice' , 
    initialState : {
        status : 'pending',
        items : []
    },
    reducers : {
       async startFetching(state,action){
        const query = action.payload ; 
            const response =  await fetch(`https://www.googleapis.com/customsearch/v1?key=%20AIzaSyAO_nIp-z9monNvF-rQoKhkC9D5j7x9SxI%20&cx=65533adef18cf46d4&q=${query.value}`);
            if(!response.ok){
                throw new Error('FAILED TO FETCH DATA');
            }
            try{

                const data = await response.json();
                return data ;

            }catch(error){
                return state.status = error ;
            }
            

            
            
        }
    }

})
export  const FetchingActions = FetchingSlice.actions ;
export default FetchingSlice ;
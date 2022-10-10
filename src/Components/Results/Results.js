/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useCallback, useState } from 'react';
import classes from './Results.module.css'
import GIF from '../../assets/loader-search-engine.gif'
import  FAIL from '../../assets/fail.gif'




const Results = (props) => {
        const [urls , setUrls] = useState([]);
        const [enteredSearch , setEnteredSearch] = useState();
        const [isLoading , setIsLoading] = useState(false);
        const [error , setError] = useState(null);

       const inputChangeHandler =(event)=>{
                setEnteredSearch(event.target.value);
       }

        //fetching function 
     const fetchingGoogleSearch =  useCallback( async () =>{
        setError(null); // ensure that error is null 
        setIsLoading(true);//for a loader
                try{ 
                        const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=%20AIzaSyAO_nIp-z9monNvF-rQoKhkC9D5j7x9SxI%20&cx=65533adef18cf46d4&q=${enteredSearch}`);
                if(!response.ok){
                        // throw a new error 
                        throw new Error('OOPSYyy something went wrong ... please contact the developer at @instagramAccount');
                }

                //else 
                const data = response.json();
                const allData = data.items.map((url)=>{
 //........................................... i might  DISPLAY MORE DETAILS IN A REDUX ACTION THUNK)......................................................
                        return {
                                id : url.cacheId,
                                htmlTitle : url.htmlTitle ,
                                link : url.link ,
                                description : url.htmlSnippet,
                        } 
                         });
                         setUrls(allData);
                        }
                         catch(err){
                                        setError(err);
                         }
                         setIsLoading(false); // get rid of loader
     },[enteredSearch]);
        
    
  return (
    <div>
    <div className={classes.search__input}>
    <input onChange={inputChangeHandler} type='text' name='google__search__input' className={classes.search__google} />
    <button onClick={fetchingGoogleSearch}>SEARCH</button>
</div>
                        {isLoading && 
                                <img src={GIF} alt="loading Urls ... go grab some cofee you'll need it  :)" />
                        }

           
                 
                                { !isLoading && 
                                         urls.map(()=>(
                                          <ul key={urls.id} >
                                        <li>{urls.htmlTitle}</li>
                                        <li><iframe src={urls.link}></iframe></li>
                                        <li>{urls.htmlSnippet}</li>
                                        </ul>
                                ))}

                                {!error && 
                                        <p>{error}</p> 
                                }
                 
       
    </div>
  )
}

export default Results
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useCallback, useState } from "react";
import classes from "./Results.module.css";
import GIF from "../../assets/loader.gif";
//import  FAIL from '../../assets/fail.gif'

const Results = () => {
  const [urls, setUrls] = useState([]);
  const [enteredSearch, setEnteredSearch] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const inputChangeHandler = (event) => {
    setEnteredSearch(event.target.value);
  };

  //fetching function
  const fetchingGoogleSearch = useCallback(async () => {
    setError(null); // ensure that error is null
    setIsLoading(true); //for a loader
    try {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=%20AIzaSyAO_nIp-z9monNvF-rQoKhkC9D5j7x9SxI%20&cx=65533adef18cf46d4&q=${enteredSearch}`
      );
      if (!response.ok) {
        // throw a new error
        throw new Error(
          "OOPSYyy something went wrong ... please contact the developer at @instagramAccount"
        );
      }

      //else
      const data = await response.json();
      console.log(data);
      // getting the data
      const allData = [];
      data.items.map((el) =>
        allData.push({
          id: el.cacheId,
          snippet : el.snippet ,
          key: el.cacheId,
          link: el.link,
          title: el.htmlTitle,
        })
      );
      
      setUrls(allData);
      console.log(urls);
    } catch (err) {
        console.log(err);
      setError(err);
    }
    setIsLoading(false); // get rid of loader
  }, [enteredSearch,urls]);

  //const results = urls ;

  return (
    <div className={classes.container}>
        <div className={classes.search__input}>
            <label htmlFor="search-google"> HAPPY HACKING !  </label>
             <input id="search-google"
          onChange={inputChangeHandler}
          type="text"
          placeholder="SEARCH HERE ..."
          name="google__search__input"
          className={classes.search__google}
        />
        <button onClick={fetchingGoogleSearch}>SEARCH</button>
      </div>
      {isLoading && (
        <img
          src={GIF}
          alt="loading Urls ... go grab some cofee you'll need it  :)"
        />
      )}

      {!isLoading &&
        urls.map((url) => {
                return (<ul key={url.cacheId}>
                        <p>{url.snippet}</p>
                        <li><iframe height="400" width="1200"  src={url.link}></iframe></li>
                        <h3>if IFRAME WAS BLOCKED THEN USE THIS LINK : <a href={url.link}><small>{url.link}</small></a></h3>
                      </ul>)
      })}

      {error && <p>{error}</p>}
    </div>
  );
};

export default Results;

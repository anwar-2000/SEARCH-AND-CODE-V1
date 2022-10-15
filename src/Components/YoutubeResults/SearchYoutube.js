import React, { useState } from 'react'
import classes from './SearchYoutube.module.css'
const SearchYoutube = (props) => {
    const [title,setTitle] = useState('');
    
   
    const SearchChangeHandler =(event)=>{
        const newTitle = event.target.value ;
        setTitle(newTitle);

    }
    
    const submitFormHandler =(event)=>{
        event.preventDefault();

        props.onSearch(title)
}
  return (
    <form onSubmit={submitFormHandler}>
    <div className={classes.search__input}>
    <label htmlFor="search-google" className='text-white mr-3'> HAPPY HACKING !  </label>
     <input id="search-google"
            onChange={SearchChangeHandler}
         type="text"
       placeholder="SEARCH HERE ..."
      name="youtube__search__input"
        className={classes.search__google}
            />
            <button>SEARCH  </button>
            </div>
                {/*<label htmlFor='searchYoutube'>Youtube Search : </label>
  <input className={classes.search__google} type='text' id="searchYoutube" placeholder="SEARCH HERE" onChange={SearchChangeHandler} /> */}
                
    </form>
  )
}

export default SearchYoutube
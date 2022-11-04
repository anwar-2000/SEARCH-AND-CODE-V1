import React, {useRef, useState } from 'react'
import Results from '../Results/Results';
import classes from './GoogleSearch.module.css'


const GoogleSearch = () => {
  const[searchThis , setSearchThis] = useState('');
      const FetchingHanlder = (event) =>{
              setSearchThis(event.target.value)
      }

    const isEmpty = searchThis === '' ; 
    let value ;
    const passValueHandler = (event) =>{
      value = searchThis ;
}

  return (
    <div className={classes.searchSection}>
            
            <div className={classes.results}>
                    <Results value={value} click={false} />
            </div>
    </div>
  )
}
export default GoogleSearch


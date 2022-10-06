import Src from 'gsap/src'
import React from 'react'
import SmokeVideo from '../../assets/smoke.mp4'
import classes from './HeroText.module.css'
const HeroText = () => {
  return <>
  <div className={classes.wrapper}>
            <div className={classes.container}>
                    <video autoPlay muted loop>
                    <source src={SmokeVideo} />
                    </video>
            </div>
            <div className={classes.text}>
            <h1>SEARCH AND WORK</h1>
            </div>
</div>
        
    </>
}

export default HeroText
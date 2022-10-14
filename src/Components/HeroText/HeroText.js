import SmokeVideo from '../../assets/smoke.mp4'
import classes from './HeroText.module.css'
import python  from '../../assets/python2.jpg'
import nodejs  from '../../assets/nodejs.png'
import php from '../../assets/php3.jpg'
import java  from '../../assets/java.png'
import Bach  from '../../assets/bach.png'
import Nav from '../nav/Nav'
import Main from '../Main/Main'
const HeroText = () => {
  
  return <>
       
 {/* <div className={classes.wrapper}>
            <div className={classes.container}>
                    <video autoPlay muted loop>
                    <source src={SmokeVideo} />
                    </video>
            </div>
            <div className={classes.text}>
                <div className={classes.movingTexts}>
                
                </div>
                <div className={classes.languages}>
                </div>
               <h1>SEARCH AND CODE</h1>
               <h5> YOU CODE AND LEARN WHILE LOOKING AT TUTORIALS !</h5>
            </div>

</div>
    <div className={classes.gsap__animations__togif}>
                    <img src={python} alt='' />
                    <img src={Bach} alt='' />
                    <img src={php} alt='' />
                    <img src={nodejs} alt='' />
                    <img src={java} alt='' />
</div>  */}


            <Nav />
            <Main />        
        
    </>
}

export default HeroText
import React from 'react'
import classes from './Modal.module.css';
import welcomeGif from '../../assets/welcome.gif'
const Modal = (props) => {

        const closeHandler = () =>{
            props.onClose();
        }
  return <>

        <div className={classes.backdrop} onClick={closeHandler}></div>
    <div className={classes.modal}>
                <div className='flex justify-center items-center'>
                    <img src={welcomeGif} alt='welcome coder' className='w-1/2' />
                </div>

                <div>
                        <ul className='font-serif'>
                                        <li>
                                                <h5> 1 - Scroll down </h5>
                                        </li>
                                        <li>
                                                <h5> 2 - You'll find (youtube/google) logo , you can make a <br/>search on either
                                                  one of them by clicking the wanted one </h5>
                                                 <small className='font-light'> SOME WEBSITES WON'T OPEN IN GOOGLE's SEARCH OPTION ... </small>
                                        </li>
                                        <li>
                                        <h5> 3 - Swipe  right or press the arrows to switch between the online IDE and SEARCHING </h5>
                                         </li>
                                        
                                         <li>
                                         <h5> 4 - HAPPY HACKING ! </h5>
                                          </li>
                        </ul>
                </div>

            <div><button onClick={closeHandler}>OKAY</button></div>

    </div>
  </>
}

export default Modal
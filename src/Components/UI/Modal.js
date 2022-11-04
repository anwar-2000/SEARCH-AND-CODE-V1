import React from 'react'
import classes from './Modal.module.css';
import welcomeGif from '../../assets/welcome.gif'
import tuto from '../../assets/codingFactTuto.mp4'
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
                <video style={{width: '90%', height: '100%'}} controls src={tuto} type="video/mp4" />                   
                </div>

            <div><button onClick={closeHandler}>OKAY</button></div>

    </div>
  </>
}

export default Modal
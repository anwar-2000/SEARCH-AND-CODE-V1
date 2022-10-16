import React from 'react'
import classes from './Aboutme.module.css'
const Aboutme = () => {
  return (
    <div className={`bg-green-500 text-white lg:flex  justify-between w-screen font-mono ${classes.aboutme}`}>
           <div><p>THIS IDEA AND WEBSITE BELONGS TO THEIR ONLY OWNER <span className='font-serif text-black sm:hidden'>KHALED ANWAR KHAOUANI </span></p></div> 
    <div>    <a href="https://github.com/anwar-2000" className='mx-5'>GITHUB</a>
             <a href="mailto:khaledkhaouani5@gmail.com" className='mx-5 '>khaledkhaouani5@gmail.com</a> 
    </div>
           
    </div>
  )
}

export default Aboutme
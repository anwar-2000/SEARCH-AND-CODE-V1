import React from 'react'
import classes from './Header.module.css'
const Header = () => {
  return (
    <nav className={classes.nav}>
            <ul className={classes.ul}>
                        <span><li>LOGO</li></span> 
                        <span>
                        <li>ABOUT US</li>
                        <li>PRICING</li>
                        </span>
                        
            </ul>
    </nav>
  )
}

export default Header

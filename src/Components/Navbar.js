import React from 'react'
import './Navbar.css'
import Logo from '../Svgs/Logo.svg'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <div className='logo'>
        <img src={Logo} alt='logo' />
      </div>
      <div className='nav-items'>
        <li><a href="/">Home</a></li>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Events</a></li>
        <li><a href="/">Who are we</a></li>
      </div>  
    </div>
    </>
  )
}

export default Navbar

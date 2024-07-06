import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-red-500'>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar

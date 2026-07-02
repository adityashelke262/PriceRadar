import React from 'react'
import logoMode from '../../assets/mode.png'
import logoSearchwhite from '../../assets/search_white.png'
import logoSearchblack from '../../assets/search_black.png'
import logo from '../../assets/a.png'
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>

        <img src={logo} alt=" " className='logo' />
       
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/search">SEARCH</Link></li>
          <li><Link to="/compare">COMPARE</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
        </ul>

        <div className="search-box">
            <input type="text" placeholder="Search..." />
            <img src={logoSearchblack} alt=" " className='searching' />
        </div>
        <img src={logoMode} alt=" " className='togglemode' />
    </div>
  )
}

export default Navbar
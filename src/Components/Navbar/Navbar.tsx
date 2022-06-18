import React from 'react'
import './Navbar.css'

import logo from '../../Assets/Photo/logo.png';
type Props = {}
function Navbar() {
  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="logo"  />
      

      </div>

    </div>
    
  )
}

export default Navbar
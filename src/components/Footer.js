import React from 'react';

import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div>
    
    <nav className="navbar justify-content-center footer">
  
      <li className="nav-item nav-link">
        <Link to="/">Made By Daniel Malakiman
        </Link>
      </li>
      <li className="nav-item nav-link">
        <Link to="/"> Cater App</Link>
      </li>
    </nav>
</div>
    
  )
}

export default Footer;
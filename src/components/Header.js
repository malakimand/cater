import React from 'react';

import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
    
    <nav className="navbar justify-content-center header">
    <span className="justify-content-left title"> Cater App</span>
      <li className="nav-item nav-link">
        <Link to="/">Login
        </Link>
      </li>
      <li className="nav-item nav-link">
        <Link to="/top-streams"> About Us</Link>
      </li>
    </nav>
</div>
    
  )
}

export default Header;

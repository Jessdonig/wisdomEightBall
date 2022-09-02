import './navbar.css'
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


function Navbar() {


  return (
    <Router>
      <div className ={'navbarContainer'}>
       <nav>
        <Link className='nav-item' to='/'>about</Link>
        <Link className='nav-item' to='/'>dev projects</Link>
        <Link className='nav-item' to='/'>creative</Link>
        <Link className='nav-item' to='/'>leadership</Link>
      </nav>
    </div>
    </Router>
   
  );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router';

//our persistent navigation bar that sits on top of most pages
const Navbar = (props) =>
    <nav className="main-nav">
      <div className="navbar-flex">
        <div>
          <img  className="my-image" src="http://img14.deviantart.net/e77b/i/2014/014/0/7/phoenix_by_josefhotpocket-d72892l.png" alt="presentation"/>
        </div>
        <div className="div-class-items">
         <Link to="/home" activeClassName="active-nav-btn" className="nav-item"> HOME </Link>
         <Link to="/about" activeClassName="active-nav-btn" className="nav-item">  ABOUT </Link>
         <Link to="/blog" activeClassName="active-nav-btn" className="nav-item"> BLOG </Link>
        </div>
      </div>
    </nav>

export default Navbar;

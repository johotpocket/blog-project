import React from 'react';
import { Link } from 'react-router';

var Navbar = React.createClass({
  render: function(){
    return(
    <nav className="main-nav">
      <div className="navbar-flex">
      <div>
        <img  className="my-image" src="http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/A-G/aardvark-walking.jpg" alt="presentation"/>
      </div>
      <div className="div-class-items">
       <Link to="/home" activeClassName="active-nav-btn" className="nav-item"> HOME </Link>
       <Link to="/about" activeClassName="active-nav-btn" className="nav-item">  ABOUT </Link>
       <Link to="/blog" activeClassName="active-nav-btn" className="nav-item"> BLOG </Link>
      </div>
      </div>
    </nav>
    )
  }
});

export default Navbar;

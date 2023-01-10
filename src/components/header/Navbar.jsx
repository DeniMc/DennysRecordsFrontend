import React, { useState } from "react";

import { Link } from "react-router-dom";
import Nav from '../../styles/navbar.css'
import rockFingers from '../../assets/rockFingers.svg'


function Navbar() {
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState('nav_toggler');

  const navToggle = () => {
    active === "nav_menu" 
     ? setActive("nav_menu nav_active")
    : setActive("nav_menu");
  
    toggleIcon === 'nav_toggler'
  ? setToggleIcon('nav_toggler toggle')
  : setToggleIcon('nav_toggler');
};

  return (
    <div>
      <nav className="nav">
      <Link to="/login" className="nav_login nav_link">
          <img className="playerIcon" src={rockFingers } alt="" />
        </Link>
        <Link to="/profile" className="nav_brand nav_link">
          Dennys Records
        </Link>
        <ul className={active}>
          <li className="nav_item">
            <Link to="/" className="nav_link">
              Home
            </Link>
          </li>
          <li className="nav_item">
            <Link to="about" className="nav_link">
              About
            </Link>
          </li>
          <li className="nav_item">
            <Link href="#" className="nav_link">
              Add Records
            </Link>
          </li>
          <li className="nav_item">
            <Link to="products/list" className="nav_link">
              Display Products
            </Link>
          </li>
          <li className="nav_item">
            <Link to="contactus" className="nav_link">
              Contact Us
            </Link>
          </li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;


import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/SideBar.css';

function SideBar() {
  return (
    <div className="SideBar">
        <nav className="SideNavBar">
            <Link className="NavLinks" to="/about">
                <div className="NavLinks">ABOUT</div>
            </Link>
            <Link className="NavLinks" to="/music">
                <div className="NavLinks">MUSIC</div>
            </Link>
        </nav>
    </div>
  )
}

export default SideBar
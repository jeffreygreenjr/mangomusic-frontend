import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header(props) {


  return (
    <header>
        <nav className="TitleNavBar">
            <Link className="NavLinks" to="/music">
                <h1 className="HeaderTitle">MANGO MUSIC</h1>
            </Link>
        </nav>
    </header>
  )
}

export default Header
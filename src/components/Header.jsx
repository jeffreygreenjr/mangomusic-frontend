import React from 'react'
import { Link } from 'react-router-dom';

function Header(props) {

    // INLINE STYLE FOR THE NAV TAG
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto",
    }

  return (
    <header>
        
        <h1>MANGO MUSIC</h1>
        <nav style={navStyle}>
            <Link to="/">
                <div>HOME</div>
            </Link>
            <Link to="/about">
                <div>ABOUT</div>
            </Link>
            <Link to="/music">
                <div>MUSIC</div>
            </Link>
        </nav>

    </header>
  )
}

export default Header
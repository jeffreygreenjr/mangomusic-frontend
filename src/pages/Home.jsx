import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Header from '../components/Header'
import AudioPlayer from '../components/AudioPlayer';
import {} from 'react-icons'

function Home(props) {

  return (
    <div className="HomePage">
        <nav className="HomePageLink">
            <Link className="NavLinks" to="/music">
                <h1 className="HomePageTitle">MANGO MUSIC</h1>
            </Link>
        </nav>
    </div>

  )
}

export default Home
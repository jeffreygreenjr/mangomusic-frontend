import React from 'react';
import '../styles/Home.css';
import AudioPlayer from '../components/AudioPlayer';
import {} from 'react-icons'

function Home(props) {

  return (
    <div>
        <h1>Welcome to Mango Music.</h1>
        <AudioPlayer />
    </div>

  )
}

export default Home
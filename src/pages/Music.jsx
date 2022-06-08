import React, { useState, useEffect } from 'react';
import '../styles/Music.css'

import Header from '../components/Header';
import SideBar from '../components/SideBar'
import AudioPlayer from '../components/AudioPlayer';


function Music(props) {

    // CREATE STATE TO HOLD MUSIC
    const [music, setMusic] = useState([]);

    // FUNCTION TO MAKE API CALL
    const getMusicData = async () => {
        const res = await fetch(props.URL + "music")
        const data = await res.json()
        setMusic(data[0].results)
    }

    // INITIAL CALL FOR DATA SO IT ONLY RUNS ONCE ON COMPONENT LOAD
    useEffect(() => {
        getMusicData()
     }, [props.URL]); 
     
    const loading = () => {
        return (
            music ? loadMusic() : <h1>Loading Music...</h1>
        )
    }

    // CREATE A FUNCTION TO THAT WILL RETURN JSX
    const loadMusic = music.map((musicsong, idx) => {
        return (
            <div className="MusicList" key={idx}>
                <h4>{musicsong.artistName}</h4>
                <h3>{musicsong.trackName}</h3>
                <img src={musicsong.artworkUrl100} alt={musicsong.trackName} />
                <div>
                    <a className="PreviewSongLink" href={musicsong.previewUrl}>Preview Song</a>                   
                </div>
            </div>
        )   
    })

    return (
        <div className="MusicPage">
            <div className="HeaderContainer">
                <Header />
            </div>
            <div className="AppWrapper">
                <div className="SideBarContainer">
                    <SideBar />
                </div>
                <div className="ContentContainer">
                    {loading}
                    <div className="MusicPagePlayer">
                        <AudioPlayer tracks={music}/>
                    </div>
                    <div className="MusicListContainer">
                        {loadMusic}
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Music
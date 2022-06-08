import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import '../styles/ArtistSearchResults.css';

function ArtistSearchResults() {

    const [artistResults, setArtistResults] = useState([]);

    const artistSearch = "flume"
    const URL = `http://localhost:4000`

    const getResults = async () => {
        const res = await fetch(URL)
        const data = await res.json()
        setArtistResults(data)
        console.log(data)
    }

    getResults();

    // useEffect(() => {
    //     getResults();
    // }, []);

    // const showResults = artistResults.map((artistResult, idx) => {
    //     return (
    //         <div className="ResultsList" key={idx}>
    //             <h4>{artistResult.artistName}</h4>
    //             <h3>{artistResult.trackName}</h3>
    //             <img src={artistResult.artworkUrl100} alt={artistResult.trackName} />
    //             <div>
    //                 <a className="PreviewSongLink" href={artistResult.previewUrl}>Preview Song</a>                   
    //             </div>
    //         </div>
    //     )
    // })

  return (
    <div>
        <h2 className="SearchTitle">Searching For Flume...</h2>
        {/* {showResults} */}
    </div>
  )
}

export default ArtistSearchResults
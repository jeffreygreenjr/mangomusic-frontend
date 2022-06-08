import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/SideBar.css';
import { ImMusic } from 'react-icons/im';
import { MdLibraryMusic } from 'react-icons/md';
import { RiPlayListFill, RiPlayCircleLine } from 'react-icons/ri';

function SideBar() {
  return (
    <div className="SideBar">
        <nav className="SideNavBar">
          <div className="categories">
            <p className="categorytitle">< ImMusic className="sidebar-icons"/> Mango Music</p>
            <Link className="NavLinks" to="/about">
              <p className="NavLinks">About</p>
            </Link>
            <p>Listen Now</p>
            <p>Browse</p>
            <p>Radio</p>
          </div>
          <div className="categories">
            <p className="categorytitle">< MdLibraryMusic className="sidebar-icons"/> Library</p>
            <p>Artists</p>
            <p>Albums</p>
            <p>Songs</p>
          </div>
          <div className="categories">
            <p className="categorytitle">< RiPlayListFill className="sidebar-icons"/> Playlists</p>
            <p>Code and Chill</p>
            <p>Lofi Vibes</p>
            <p>Summer Sounds</p>
          </div>
        </nav>
    </div>
  )
}

export default SideBar
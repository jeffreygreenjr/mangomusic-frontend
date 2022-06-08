import React from 'react'
import '../styles/About.css'
import Header from '../components/Header';
import { BsGithub, BsLinkedin } from 'react-icons/bs'

function About() {
  return (
    <div className="AboutPage">
        <Header />
        <h3>About</h3>
        <h5>Developed and deployed by Jeffrey Green.</h5>
        <div className="AboutNav">
          <nav>
            <a href="https://github.com/jeffreygreenjr">
              < BsGithub className="NavLinks"/>
            </a>
            <span> | </span>
            <a href="https://www.linkedin.com/in/jeffreygreenjr/">
              < BsLinkedin className="NavLinks"/>
            </a>
          </nav>
        </div>
    </div>
  )
}

export default About
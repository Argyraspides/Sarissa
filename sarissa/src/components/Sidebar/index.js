import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import InitialsLogo from '../../assets/images/initials_logo_purple_b1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode, faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react';
const Sidebar = () => {


    const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

    return (
        <div className={`nav-bar ${isSidebarOpen ? 'open' : ''}`}>
            <div className='hamburger-menu' onClick={handleToggleSidebar}>
        &#9776; {/* Hamburger icon */}
            </div>
        <Link className='logo' to='/'>
            <img src={InitialsLogo} alt="logo"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" className="home-link" to="/">
                <FontAwesomeIcon icon={faHome} />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/projects">
                <FontAwesomeIcon icon={faCode} />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/vinayak-joshi-74399b247/' className='linkedin-link'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.github.com/Argyraspides' className='github-link'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
            
        </ul>
    </div>
    )
}

export default Sidebar
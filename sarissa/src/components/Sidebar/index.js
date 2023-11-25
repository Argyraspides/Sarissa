import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import InitialsLogo from '../../assets/images/initials_logo_purple_b1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode, faEnvelope, faHome} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => {
   
    return (
        <div className="nav-bar">
           
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
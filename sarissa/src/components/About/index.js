import './index.scss'
import Background from '../Background'
import Sidebar from '../Sidebar'
import Logo from '../../assets/images/initials_logo_purple_b1.png'



const About = () =>
{
    return (
        <div>
            <Background/>
            <Sidebar/>
            <div className='logo-container'>
                <img src={Logo} className='logo'></img>
                <div className='desc-container'>
                    <h1 className='desc'>
                        Deez nuts
                        <h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </h2>
                    </h1>

                </div>
            </div>
            
        </div>)
        
}

export default About
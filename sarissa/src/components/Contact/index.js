import Typewriter from '../../assets/effects/Typewriter'
import Sidebar from '../Sidebar'
import AnimatedForm from './AnimatedForm'
import Logo from './AnimatedLogo'
import './index.scss'

const Contact = () => {
    return (
        <>
            <Sidebar />
            <div className='contact-page'>
                <div className="text-zone">
                    <h1>
                        <Typewriter text="Contact Me" delay={30} />
                    </h1>
                    <p>
                        <Typewriter text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." delay={30} />
                    </p>
                    
                </div>
            </div>
            <AnimatedForm/>
            <Logo />
        </>
    )
}

export default Contact
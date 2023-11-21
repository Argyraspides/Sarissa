import './index.scss'
import Background from '../Background'
import Sidebar from '../Sidebar'
import Typewriter from '../Home/Typewriter'
import Logo from './Logo'
import Loader from 'react-loaders'



const About = () => {
    const txt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    return (
        <>
            <Background />
            <Sidebar />
            <Logo />
            <div className='desc-container'>
                <h1 className='desc'>
                    <Typewriter text='Ex Nihilo' delay={30} />
                    <h2>
                        <Typewriter text={txt} delay={30} />
                    </h2>
                </h1>
            </div>
        </>
    )

}

export default About
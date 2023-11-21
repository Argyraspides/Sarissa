import Background from '../Background'
import Typewriter from '../Home/Typewriter'
import Sidebar from '../Sidebar'
import './index.scss'

const Contact = () => {
    return (
        <>
        <Sidebar/>
        <div className='container contact-page'>
            <div className = "text-zone">
                <h1>
                    <Typewriter text="Contact Me" delay={75}/>
                </h1>
                <p>
                <Typewriter text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." delay={10}/>
                </p>
                <div className='contact-form'>
                    <ul>
                        <li className='half'>
                            <input type="text" name="name" placeholder="Name" required/>
                        </li>
                        <li className='half'>
                            <input type="email" name="email" placeholder="Email" required/>
                        </li>
                        <li>
                            <input placeholder="Subject" type="text" name="subject" required/>
                        </li>
                        <li>
                           <textarea placeholder="Message" name="Message" required></textarea>
                        </li>
                        <li>
                           <input type="submit" className='flat-button' value="send"></input>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact
import './index.scss'
import Sidebar from '../Sidebar'
import Typewriter from '../../assets/effects/Typewriter'
import Logo from './AnimatedLogo'
import { useState, useEffect } from 'react'

const About = () => {

    const [visitedBefore, setVisitedBefore] = useState(false);

    useEffect(() => {
        const hasVisitedBefore = sessionStorage.getItem('visitedAboutRoute');

        if (hasVisitedBefore) {
            setVisitedBefore(true);
        } else {
            sessionStorage.setItem('visitedAboutRoute', true);
        }

    }, []);

    const spc = `                           `;
    const sentences = [
        `I always have loved, and always will love the software world. Check out my projects on the sidebar, or contact me for any inquiries.`
    ];

    let welcomeTextBody = spc + spc;
    sentences.forEach(
        sentence => {
            welcomeTextBody += sentence;
            welcomeTextBody += spc;
        }
    )

    let welcomeText;
    let welcomeSubText;
    let finalWelcomeTextBody;
    if (!visitedBefore) {
        welcomeText = <Typewriter text='Vinayak Joshi' delay={25} />
        welcomeSubText = <Typewriter text='Final Year Software Engineering Student at UoA' delay={25} />
        finalWelcomeTextBody = <Typewriter text={welcomeTextBody} delay={25} />
    }
    else {
        welcomeText = 'Vinayak Joshi'
        welcomeSubText = 'Final Year Software Engineering Student at UoA'
        finalWelcomeTextBody = welcomeTextBody;
    }

    return (
        <>
            <Sidebar />
            <div className='about-container'>
                <div className='desc-container'>
                    <h1>
                        {welcomeText}
                        <h2>
                            {welcomeSubText} 
                        </h2>
                        <br></br>
                        <p>
                            {welcomeTextBody}
                        </p>
                    </h1>
                </div>
                <Logo className='about-logo-container' />
            </div>
        </>
    )


}

export default About
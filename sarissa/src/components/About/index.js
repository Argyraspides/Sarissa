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
        `My name is Vinayak Joshi.`,

        `As I push through my final year of software engineering at the University of Auckland, so too do I push my amibition for the software world.`,
        `Drive, tenacity, and always seeking greater not only for myself, but for all, is my purpose. `,
        `There is nothing more noble than to endure the inevitabilities of life for the service of mankind.`,
        `Here you will find my works, and a means to contact me for any inquiries.`
    ];

    let welcomeTextBody = spc + spc;
    sentences.forEach(
        sentence => {
            welcomeTextBody += sentence;
            welcomeTextBody += spc;
        }
    )

    let welcomeText;
    let finalWelcomeTextBody;
    if (!visitedBefore) {
        welcomeText = <Typewriter text='Welcome.' delay={25} />
        finalWelcomeTextBody = <Typewriter text={welcomeTextBody} delay={25} />
    }
    else {
        welcomeText = 'Welcome'
        finalWelcomeTextBody = welcomeTextBody;
    }

    return (
        <>
            <Sidebar />
            <Logo className='about-logo-container' />
            <div className='desc-container'>
                <h1>
                    {welcomeText}
                    <h2>
                        {finalWelcomeTextBody}
                    </h2>
                </h1>
            </div>
        </>
    )


}

export default About
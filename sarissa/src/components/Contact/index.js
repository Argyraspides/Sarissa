import Typewriter from '../../assets/effects/Typewriter'
import AnimatedForm from './AnimatedForm'
import Logo from './AnimatedLogo'
import Sidebar from '../Sidebar'
import './index.scss'
import { useState, useEffect } from 'react'

const Contact = () => {

    const [visitedBefore, setVisitedBefore] = useState(false);

    useEffect(() => {
        const hasVisitedBefore = sessionStorage.getItem('visitedContactRoute');

        if (hasVisitedBefore) {
            setVisitedBefore(true);
        } else {
            sessionStorage.setItem('visitedContactRoute', true);
        }

    }, []);


    const spc = `                      `
    const contactTextBody = spc +
        `You may contact me via email, which I check regularly.`
        + spc + `Use the form below, or email me directly at joshivinayak441@gmail.com.`


    let contactTitleText;
    let finalContactTextBody;

    if (!visitedBefore) {
        contactTitleText = <Typewriter text={"Contact Me"} delay={30} />
        finalContactTextBody = <Typewriter text={spc + contactTextBody} delay={30} />
    } else {
        contactTitleText = "Contact Me"
        finalContactTextBody = contactTextBody
    }

    return (
        <div>
            <Sidebar />
            <div className='contact-page-container'>
                <div className='contact-page'>
                    <div className="text-zone">
                        <h1>
                            {contactTitleText}
                        </h1>
                        <p>
                            {finalContactTextBody}
                        </p>

                    </div>
                    <AnimatedForm className='contact-form-container' />
                </div>
                <Logo className='contact-page-logo-container' />
            </div>
        </div>

    )
}

export default Contact
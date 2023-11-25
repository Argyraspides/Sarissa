import Typewriter from '../../assets/effects/Typewriter'
import AnimatedForm from './AnimatedForm'
import Logo from './AnimatedLogo'
import './index.scss'

const Contact = () => {
    const spc = `                      `
    const txt = spc +
        `You may contact me via email, which I check regularly.`
        + spc + `Use the form below, or email me directly at joshivinayak441@gmail.com.` + spc + `Whichever is more convenient for you.`
    return (
        <div className='contact-page-container'>
            <div className='contact-page'>
                <div className="text-zone">
                    <h1>
                        <Typewriter text={"Contact Me"} delay={30} />
                    </h1>
                    <p>
                        <Typewriter text={spc + txt} delay={30} />
                    </p>

                </div>
                <AnimatedForm className='contact-form-container' />

            </div>
            <Logo className='contact-page-logo-container'/>
        </div>
    )
}

export default Contact
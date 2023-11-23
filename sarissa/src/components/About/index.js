import './index.scss'
import Sidebar from '../Sidebar'
import Typewriter from '../../assets/effects/Typewriter'
import Logo from './AnimatedLogo'


const About = () => {

    const spc = `                           `;
    const sentences = [
        `My name is Vinayak Joshi.`,

        `As I push through my final year of software engineering at the University
        of Auckland, so too do I push my amibition for the software world.`,

        `Drive, tenacity, and always seeking greater
        not only for myself, but for all, is my purpose. `,

        `There is nothing more noble than to endure the inevitabilities
        of life for the service of mankind.`,

        `Here you will find my works, and a means to contact me for any inquiries.`
    ];              

    let txt = spc;
    sentences.forEach(
        sentence => {
            txt += sentence;
            txt += spc;
        }
    )
    
    return (
        <>
            <Sidebar />
            <Logo />
            <div className='desc-container'>
                <h1 className='desc'>
                    <Typewriter text='Welcome.' delay={100} />
                    <h2>
                        <Typewriter text={txt} delay={50} />
                    </h2>
                </h1>
            </div>
        </>
    )

}

export default About
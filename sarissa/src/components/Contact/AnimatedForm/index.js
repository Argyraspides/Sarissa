import { useRef } from 'react'
import './index.scss'
import emailjs from "@emailjs/browser"
const AnimatedForm = ({ className }) => {
    console.log(className)

    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_lf6emqb',
            'template_j34t4mf',
            refForm.current,
            'RiYEg9RxIZ3E_xr3y'
        ).then(
            () => {
                alert('Message sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send message. Please try again.')
            }
        )
    }

    return (
        <div className={className}>
            <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type="text" name="name" placeholder="Name" required />
                        </li>
                        <li className='half'>
                            <input type="email" name="email" placeholder="Email" required />
                        </li>
                        <li>
                            <input placeholder="Subject" type="text" name="subject" required />
                        </li>
                        <li>
                            <textarea placeholder="Message" name="Message" required></textarea>
                        </li>
                        <li>
                            <input type="submit" className='flat-button' value="send"></input>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    )
}

export default AnimatedForm
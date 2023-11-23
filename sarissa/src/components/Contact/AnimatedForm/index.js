import { useRef } from 'react'
import './index.scss'
import emailjs from "@emailjs/browser"
const AnimatedForm = () => {

    const refForm = useRef()


    const sendEmail = (e) =>
    {
        e.preventDefault()

        emailjs.sendForm(
            'SERVICE_ID_TST',
            'TEMPLATE_ID',
            refForm.current,
            'PUBLIC_KEY'
        ).then (
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
    )
}

export default AnimatedForm
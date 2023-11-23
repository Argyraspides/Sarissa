import './index.scss'

const AnimatedForm = () => {

    return (
        <div className='contact-form'>
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
        </div>
    )
}

export default AnimatedForm
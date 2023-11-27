import './index.scss'
import LogoS from '../../../assets/images/radio_telescope_2_b.png'
import { ReactComponent as LogoSVG } from '../../../assets/images/radio_telescope_2_b.svg'

const Logo = ({className}) => {
    return (
        <div className={className}>
            <LogoSVG/>
            <img className='contact-solid-logo' src={LogoS} alt="S" />
        </div>
    )
}

export default Logo

{/*  */}
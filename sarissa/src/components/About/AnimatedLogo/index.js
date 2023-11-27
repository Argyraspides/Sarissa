import './index.scss'
import LogoS from '../../../assets/images/initials_logo_purple_b1.png'
import { ReactComponent as LogoSVG } from '../../../assets/images/initials_logo_purple_b1.svg'

const Logo = ({className}) => {


    return (
        <div className={className}>
            <LogoSVG/>
            <img className='about-solid-logo' src={LogoS} alt="S" />
        </div>
    )
}

export default Logo
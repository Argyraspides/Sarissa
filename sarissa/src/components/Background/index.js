import './index.scss';
import TwinklingBackground from '../../assets/video/twinkling.mp4';

const Background = () => {
  return (
    <div className='twinkling-backgrounds'>
        <video autoPlay loop muted playbackRate={0.1}>
        <source src={TwinklingBackground} type='video/mp4' />
        </video>  
    </div>
  );
};

export default Background;
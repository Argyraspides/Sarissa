import './index.scss';
import TwinklingBackground from '../../assets/video/twinkling.mp4';

const Background = () => {
  return (
    <div className='twinkling-backgrounds'>
        <video autoPlay loop muted playbackRate={0.1}>
        <source src={TwinklingBackground} type='video/mp4' />
        </video>  
        <div className='text-overlay'>
          <h1>Overlayasdfasdfasfdasldjhflasjdhfkasjdhflasdhfjkashdjkfhaskdfhkajsdhfjsdhfjkasdhfljksdhflkashdfjkashdkfahsdfhjasdhlfjkashldkjfhljkasdhjlfk Text</h1>
        </div>
    </div>
  );
};

export default Background;
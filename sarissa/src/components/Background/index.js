import './index.scss';
import TwinklingBackground from '../../assets/video/twinkling_compressed_new.mp4';

const Background = () => {


  return (
    <section id='twinkling-backgrounds'>
        <video autoPlay loop muted>
        <source src={TwinklingBackground} type='video/mp4' />
        </video>  
    </section>
  );
};

export default Background;
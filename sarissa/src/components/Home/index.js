
import './index.scss'
import Typewriter from './Typewriter';

const Home = () => {
    return (
      <div className="welcome">
        <h1>
          <span><Typewriter text = "I'm Vinayak." delay={50}/></span>
          <br></br>
          <span><Typewriter text = "Welcome to my ship." delay={50}/></span>
        </h1>
        <h4>
            <span><Typewriter text = 'Passionate, tenacious, and always willing to put "we" over "me".' delay={50}/></span>
            <br></br>
            <span><Typewriter text = 'I am currently a final year software engineering student at the University of Auckland' delay={50}/></span>
            <br></br>
            <span><Typewriter text = 'with a love all things software, having a special interest in modelling the real world.' delay={50}/></span>
        </h4>
      </div>
    );
  };
  

export default Home;
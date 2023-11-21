
import './index.scss'
import { NavLink } from 'react-router-dom';
import Typewriter from './Typewriter';
import PhysicsEngineIcon from '../../assets/images/physics_engine_cover.png'
import CppIcon from '../../assets/images/cpp_logo.svg'
import WebAssemblyIcon from '../../assets/images/web_assembly_Logo.svg'
import SDL2Icon from '../../assets/images/sdl2_logo.png'
import UnderConstructionIcon from '../../assets/images/under_construction.svg'

const Home = () => {
  return (
    <div className="welcome">
      <h1>
        <span><Typewriter text="I'm Vinayak Joshi." delay={35} /></span>
        <br></br>
        <span><Typewriter text="Welcome to my ship." delay={35} /></span>
      </h1>
      <h2>
        <span><Typewriter text='Passionate, tenacious, and always willing to put "we" over "me". 
                                I am currently a final year software engineering student at the 
                                University of Auckland with a love of all things software, having 
                                a special interest in modelling the real world. ' delay={25} />
        </span>
      </h2>

      <h3>
      <span><Typewriter text='                                                                                               Check out my projects below!' delay={75} />
        </span>
      </h3>

      <div className='project-links'>
        <NavLink exact={true} activeClassName="active" className="physics-engine-link" to="/pe">
          <img src={PhysicsEngineIcon} alt="Physics Engine Icon" className="fade-in-image"></img>
          <div className="physics-engine-link-text">2D Physics Engine</div>
          <img src={CppIcon} alt="C++ Logo" className="cpp-logo"></img>
          <img src={WebAssemblyIcon} alt="WebAssembly Logo" className="web-assembly-logo"></img>
          <img src={SDL2Icon} alt="WebGL Logo" className="sdl2-logo"></img>
        </NavLink>
        <NavLink exact={true} activeClassName="active" className="physics-engine-link" to="/pe">
          <svg src={UnderConstructionIcon} alt="Under Construction" className="fade-in-image"></svg>
          <div className="pong-text-link"></div>
        </NavLink>
      </div>

    </div>
  );
};


export default Home;
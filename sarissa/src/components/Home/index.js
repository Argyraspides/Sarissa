
import './index.scss'
import { NavLink } from 'react-router-dom';
import Typewriter from '../../assets/effects/Typewriter';
import PhysicsEngineIcon from '../../assets/images/physics_engine_cover_new.png'
import CppIcon from '../../assets/images/cpp_logo.svg'
import WebAssemblyIcon from '../../assets/images/web_assembly_Logo.svg'
import SDL2Icon from '../../assets/images/sdl2_logo.png'
import ConstructionIcon from '../../assets/images/under_construction_2.png'

const Home = () => {
  return (
    <>
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
          <NavLink exact={true} activeClassName="active" className="project-link" to="/pe">
            <img src={PhysicsEngineIcon} alt="Physics Engine Icon" className="project-image"></img>
            <div className="project-image-text">2D Physics Engine</div>
            <div className='library-logos'>
              <img src={CppIcon} alt="C++ Logo" className="library-logo"></img>
              <img src={WebAssemblyIcon} alt="WebAssembly Logo" className="library-logo"></img>
              <img src={SDL2Icon} alt="WebGL Logo" className="library-logo"></img>
            </div>
          </NavLink>
          <NavLink exact={true} activeClassName="active" className="project-link" to="/under-construction">
            <img src={ConstructionIcon} alt="construction icon" className="project-image"></img>
            <div className="project-image-text">Fluid Simulator <br /> (In development!) </div>
          </NavLink>
          <NavLink exact={true} activeClassName="active" className="project-link" to="/under-construction">
            <img src={ConstructionIcon} alt="construction icon" className="project-image"></img>
            <div className="project-image-text">Particle Physics Simulator<br /> (In development!) </div>
          </NavLink>

        </div>
      </div>
    </>

  );
};


export default Home;
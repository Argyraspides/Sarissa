
import './index.scss'
import { NavLink } from 'react-router-dom';
import Typewriter from '../../assets/effects/Typewriter';
import PhysicsEngineIcon from '../../assets/images/physics_engine_cover_new_bw.png'
import CppIcon from '../../assets/images/cpp_logo.svg'
import WebAssemblyIcon from '../../assets/images/web_assembly_Logo.svg'
import SDL2Icon from '../../assets/images/sdl2_logo.png'
import ConstructionIcon from '../../assets/images/under_construction_3_bw.png'
import Sidebar from '../Sidebar';

const Projects = () => {
  let spc = `                                        `

  let txt = `All of these you can run directly in your browser.` + spc + `
   Some may not be complete and you may check their progress 
   and other complete non-web projects on my GitHub page at the bottom of the sidebar.`
  return (
    <>
    <Sidebar/>
      <div className="welcome">
        <h1><span><Typewriter text="Welcome to my ship." delay={75} /></span></h1>
          <br/>
        <h2><span><Typewriter text={spc+spc+spc+spc+txt} delay={30} /></span></h2>
      </div>
      <div className='project-links'>
          <NavLink exact={true} activeClassName="active" className="project-link-in-development" to="/projects">
            <img src={PhysicsEngineIcon} alt="Physics Engine Icon" className="project-image-dev"></img>
            <div className="project-image-text">2D Physics Engine <br /> (In development) </div>
            <div className='library-logos'>
              <img src={CppIcon} alt="C++ Logo" className="library-logo"></img>
              <img src={WebAssemblyIcon} alt="WebAssembly Logo" className="library-logo"></img>
              <img src={SDL2Icon} alt="WebGL Logo" className="library-logo"></img>
            </div>
          </NavLink>
          <NavLink exact={true} activeClassName="active" className="project-link-in-development" to="/projects">
            <img src={ConstructionIcon} alt="construction icon" className="project-image-dev" ></img>
            <div className="project-image-text">Fluid Simulator <br /> (In development) </div>
          </NavLink>
          <NavLink exact={true} activeClassName="active" className="project-link-in-development" to="/projects">
            <img src={ConstructionIcon} alt="construction icon" className="project-image-dev"></img>
            <div className="project-image-text">Particle Physics Simulator<br /> (In development) </div>
          </NavLink>

        </div>
    </>

  );
};


export default Projects;
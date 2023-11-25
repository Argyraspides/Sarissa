
import './index.scss'
import { NavLink } from 'react-router-dom';
import Typewriter from '../../assets/effects/Typewriter';
import PhysicsEngineIcon from '../../assets/images/physics_engine_cover_new_bw.png'
import CppIcon from '../../assets/images/cpp_logo.svg'
import WebAssemblyIcon from '../../assets/images/web_assembly_Logo.svg'
import SDL2Icon from '../../assets/images/sdl2_logo.png'
import ConstructionIcon from '../../assets/images/under_construction_3_bw.png'
import Sidebar from '../Sidebar';

import { useState, useEffect } from 'react';

const Projects = () => {


  const [visitedBefore, setVisitedBefore] = useState(false);

  useEffect(() => {
    const hasVisitedBefore = sessionStorage.getItem('visitedProjectsRoute');

    if (hasVisitedBefore) {
      setVisitedBefore(true);
    } else {
      sessionStorage.setItem('visitedProjectsRoute', true);
    }

  }, []);

  let spc = `                                        `

  let welcomeTextBody = `All of these you can run directly in your browser.` + spc + `
   Some may not be complete and you may check their progress 
   and other complete non-web projects on my GitHub page at the bottom of the sidebar.`

  let welcomeTextTitle
  let finalWelcomeTextBody

  if (!visitedBefore) {
    welcomeTextTitle = <Typewriter text="Welcome to my ship." delay={75} />
      finalWelcomeTextBody = <Typewriter text={spc + spc + spc + spc + welcomeTextBody} delay={30} />
  } else {
    welcomeTextTitle = "Welcome to my ship."
      finalWelcomeTextBody = spc + spc + spc + spc + welcomeTextBody
  }


  return (
    
    <div className="projects-container">
      <Sidebar />

      <div className="welcome">
        <h1 className="projects-welcome-title">{welcomeTextTitle}</h1> 
        <br/>
        <br/>
        <h2 className="projects-welcome-text">{finalWelcomeTextBody}</h2>
      </div> 
      <div className={`project-links ${visitedBefore ? 'disable' : ''}`}>
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
          <div className='library-logos'>
            <img src={CppIcon} alt="C++ Logo" className="library-logo"></img>
            <img src={WebAssemblyIcon} alt="WebAssembly Logo" className="library-logo"></img>
            <img src={SDL2Icon} alt="WebGL Logo" className="library-logo"></img>
          </div>
        </NavLink>
        <NavLink exact={true} activeClassName="active" className="project-link-in-development" to="/projects">
          <img src={ConstructionIcon} alt="construction icon" className="project-image-dev"></img>
          <div className="project-image-text">Particle Physics Simulator<br /> (In development) </div>
          <div className='library-logos'>
            <img src={CppIcon} alt="C++ Logo" className="library-logo"></img>
            <img src={WebAssemblyIcon} alt="WebAssembly Logo" className="library-logo"></img>
            <img src={SDL2Icon} alt="WebGL Logo" className="library-logo"></img>
          </div>
        </NavLink>

      </div>
    </div>

  );
};


export default Projects;
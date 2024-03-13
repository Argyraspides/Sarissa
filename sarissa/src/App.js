import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Projects from './components/Projects';
import About from './components/About'
import Contact from './components/Contact';
//import PE from './components/PE'
import Background from './components/Background';
import PhysicsEngine from './components/Physics_Engine';
import FluidSimulator from './components/Fluid_Simulator'
import { Analytics } from "@vercel/analytics/react"
function App() {


  return (
    <>
      <Background />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/telos" element={<PhysicsEngine />} />
        <Route path="/rheos" element={<FluidSimulator />} />
      </Routes>
      <Analytics></Analytics>
    </>
  )
}

export default App;

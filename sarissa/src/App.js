import './App.scss';
import {Route, Routes} from 'react-router-dom'
import Projects from './components/Projects';
import About from './components/About'
import Contact from './components/Contact';
//import PE from './components/PE'
import Background from './components/Background';
import PhysicsEngine from './components/Physics_Engine';

function App() {

  
  return (
   <>
   <Background/>
    <Routes>
      <Route path = "/" element={<About/>} />
      <Route path = "/projects" element={<Projects/>} />
      <Route path = "/contact" element={<Contact/>} />
      <Route path="/telos" element={<PhysicsEngine />} />
    </Routes>
   </> 
  )
}

export default App;

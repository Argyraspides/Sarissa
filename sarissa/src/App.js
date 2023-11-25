import './App.scss';
import {Route, Routes} from 'react-router-dom'
import Projects from './components/Projects';
import About from './components/About'
import Contact from './components/Contact';
import PE from './components/PE'
import Background from './components/Background';
import UnderConstruction from './components/UnderConstruction'
import Sidebar from './components/Sidebar';

function App() {

  
  return (
   <>
   <Background/>
   <Sidebar />
    <Routes>
      <Route path = "/" element={<About/>} />
      <Route path = "/projects" element={<Projects/>} />
      <Route path = "/contact" element={<Contact/>} />
      <Route path = "/pe" element={<PE/>} />
      <Route path = "/under-construction" element={<UnderConstruction/>}/>
    </Routes>
   </> 
  )
}

export default App;

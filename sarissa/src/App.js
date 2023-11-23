import './App.scss';
import {Route, Routes} from 'react-router-dom'
import Projects from './components/Layout';
import About from './components/About'
import Contact from './components/Contact';
import PE from './components/PE'
import Background from './components/Background';
import UnderConstruction from './components/UnderConstruction'

function App() {

  
  return (
   <>
   <Background/>
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

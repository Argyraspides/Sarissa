import './App.scss';
import {Route, Routes} from 'react-router-dom'
import Layout from './components/Layout';
import About from './components/About'
import Contact from './components/Contact';
import PE from './components/PE'
import Background from './components/Background';

function App() {

  
  return (
   <>
   <Background/>
    <Routes>
      <Route path = "/" element={<Layout/>} />
      <Route path = "/about" element={<About/>} />
      <Route path = "/contact" element={<Contact/>} />
      <Route path = "/pe" element={<PE/>} />
    </Routes>
   </> 
  )
}

export default App;

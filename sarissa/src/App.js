import './App.scss';
import {Route, Routes} from 'react-router-dom'
import Layout from './components/Layout';
import About from './components/About'

function App() {

  
  return (
   <>
    <Routes>
      <Route path = "/" element={<Layout/>} />
      <Route path = "/about" element={<About/>} />
    </Routes>
   </> 
  )
}

export default App;

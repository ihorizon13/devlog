import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import AboutSection from './components/AboutSection'


export default function App(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutSection />} />
    </Routes>
  )
}
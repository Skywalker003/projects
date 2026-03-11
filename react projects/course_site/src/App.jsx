import Home from '../pages/Home'
import Courses from '../pages/Courses'
import About from '../pages/About'
import Contact from '../pages/Contact'
import './App.css'
import Navbar from './components/Navbar'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Courses' element={<Courses />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

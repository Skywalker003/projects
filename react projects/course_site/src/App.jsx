import './App.css'
import Hero from './components/Hero.jsx'
import Navbar  from './components/Navbar.jsx'
import Course from './components/Course.jsx'
import LearningPath from './components/LearningPath.jsx'
import Platform from './components/Platform.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LearningPath />
      <Platform />
      <Course />
      <Projects />
      <Footer />
    </>
  )
}

export default App

import './App.css'
import Hero from './components/Hero.jsx'
import  Navbar  from './components/Navbar.jsx'
import Course from './components/Course.jsx'
import LearningPath from './components/LearningPath.jsx'
import Platform from './components/Platform.jsx'
import Project from './components/Project.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LearningPath />
      <Platform />
      <Course />
      <Project />
      <Footer />
    </>
  )
}

export default App

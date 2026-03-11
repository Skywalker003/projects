import React from 'react'

import Hero from '../src/components/Hero.jsx'
import Navbar  from '../src/components/Navbar.jsx'
import Course from '../src/components/Course.jsx'
import LearningPath from '../src/components/LearningPath.jsx'
import Platform from '../src/components/Platform.jsx'
import Projects from '../src/components/Projects.jsx'
import Footer from '../src/components/Footer.jsx'

export default function Home() {
  return (
    <>
        <Hero />
        <LearningPath />
        <Platform />
        <Course />
        <Projects />
        <Footer />
    </>
  )
}

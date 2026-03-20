import React from 'react'
import About_hero from '../src/components/About_hero'
import Mission_about from '../src/components/Mission_about'
import LearningPhilosophy from '../src/components/LearningPhilosophy'
import Technologies from '../src/components/Technologies'
import Creator from '../src/components/Creator'
import Footer from '../src/components/Footer'

export default function About() {
  return (
    <main className="about-page">
      {/* same idea as home page, but for the about sections */}
      <About_hero />
      <Mission_about />
      <LearningPhilosophy />
      <Technologies />
      <Creator />
      <Footer />
    </main>
  )
}

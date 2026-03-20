import React from 'react'
import Contact_hero from '../src/components/Contact_hero'
import Contact_form from '../src/components/Contact_form'
import Footer from '../src/components/Footer'
import Contact_map from '../src/components/Contact_map'

export default function Contact() {
  return (
    <>
      {/* contact page has hero, form, map, then footer */}
      <Contact_hero />
      <Contact_form />
      <Contact_map />
      <Footer />
    </>
  )
}

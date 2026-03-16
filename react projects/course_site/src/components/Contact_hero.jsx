import React from 'react'
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

export default function Contact_hero() {
  return (
    <section className="contact-hero ">
        <p className="contact-section-kicker">CONTACT</p>
        <h1>Get in <span>Touch</span></h1>
        <p>
            Have questions, feedback, or suggestions?<br />
            Feel free to reach out.
        </p>

      <div className="contact-social">
        <a href="https://github.com/Skywalker003" target="_blank">
        <FaGithub /> GitHub
        </a>

        <a href="https://www.linkedin.com/in/srivikas-sr/" target="_blank">
        <FaLinkedin /> LinkedIn
        </a>

        <a href="https://x.com/">
        <FaTwitter /> Twitter
        </a>

        </div>
    </section>
  )
}

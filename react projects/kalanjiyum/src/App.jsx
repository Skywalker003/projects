import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ui/ScrollToTopButton'
import Footer from './components/layout/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Careers from './pages/Careers'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import TermsAndPrivacy from './pages/TermsAndPrivacy'
import JobApplication from './pages/JobApplication'
import Internship from './pages/Internship'
import InternshipApplication from './pages/InternshipApplication'

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-and-privacy" element={<TermsAndPrivacy />} />
            <Route path="/careers/apply" element={<JobApplication />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/internship/apply" element={<InternshipApplication />} />
            <Route path="*" element={<Home />} />
          </Routes>
        <Footer />
        <ScrollToTopButton />
      </Router>
    </>
  )
}

export default App

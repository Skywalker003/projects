import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Careers from './pages/Careers'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import TermsAndPrivacy from './pages/TermsAndPrivacy'

function App() {

  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-and-privacy" element={<TermsAndPrivacy />} />
            <Route path="*" element={<Home />} />
          </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App

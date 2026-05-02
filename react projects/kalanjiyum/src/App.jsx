import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion' // eslint-disable-line no-unused-vars
import Navbar from './components/layout/Navbar'
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
import NotFound from './pages/NotFound'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-and-privacy" element={<TermsAndPrivacy />} />
          <Route path="/careers/apply" element={<JobApplication />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/internship/apply" element={<InternshipApplication />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
      <ScrollToTopButton />
    </Router>
  )
}

export default App

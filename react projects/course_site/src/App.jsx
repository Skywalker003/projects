import Home from '../pages/Home'
import Courses from '../pages/Courses'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import './App.css'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/Home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/Courses' element={<ProtectedRoute><Courses /></ProtectedRoute>} />
          <Route path='/About' element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path='/Contact' element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

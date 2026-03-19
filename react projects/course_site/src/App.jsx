import Home from '../pages/Home'
import Courses from '../pages/Courses'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import './App.css'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import ScrollToTop from './components/ScrollToTop'
import { getTokenExpiryDelay, isTokenValid } from './utils/auth'

import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  const savedToken = localStorage.getItem("token")
  const initialToken = isTokenValid(savedToken) ? savedToken : null

  if(savedToken && !initialToken){
    localStorage.removeItem("token")
  }

  const [token, setToken] = useState(initialToken)

  function handleLogin(newToken){
    localStorage.setItem("token", newToken)
    setToken(newToken)
  }

  function handleLogout(){
    localStorage.removeItem("token")
    setToken(null)
  }

  useEffect(() => {
    if(!token){
      return
    }

    const expiryDelay = getTokenExpiryDelay(token)
    const timeoutId = window.setTimeout(() => {
      handleLogout()
      if(expiryDelay > 0){
        alert("Session expired. Please login again.")
      }
    }, Math.max(expiryDelay, 0))

    return () => window.clearTimeout(timeoutId)
  }, [token])

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/Login' element={<Login handleLogin={handleLogin} />} />
          <Route path='/' element={<ProtectedRoute token={token}><><Navbar token={token} handleLogout={handleLogout} /><Home /></></ProtectedRoute>} />
          <Route path='/Home' element={<ProtectedRoute token={token}><><Navbar token={token} handleLogout={handleLogout} /><Home /></></ProtectedRoute>} />
          <Route path='/Courses' element={<ProtectedRoute token={token}><><Navbar token={token} handleLogout={handleLogout} /><Courses /></></ProtectedRoute>} />
          <Route path='/About' element={<ProtectedRoute token={token}><><Navbar token={token} handleLogout={handleLogout} /><About /></></ProtectedRoute>} />
          <Route path='/Contact' element={<ProtectedRoute token={token}><><Navbar token={token} handleLogout={handleLogout} /><Contact /></></ProtectedRoute>} />
        </Routes>
      </Router>
    </>
  )
}

export default App

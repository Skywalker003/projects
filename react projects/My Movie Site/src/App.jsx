import './App.css'
import Navbar from './components/Navbar'
import Movie_section from './components/Movie_section'

function App() {

  return (
    <>
      <Navbar />
      <Movie_section />
      <div className="text-center mt-4">
        <p>© 2025 My Movie Site. All rights reserved.</p>
      </div>
    </>
  )
}

export default App

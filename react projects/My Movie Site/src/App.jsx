import './App.css'
import React from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Movie_section from './components/Movie_section'

function App() {

  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <Header />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  )
}

export default App

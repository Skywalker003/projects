import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Movie_section from './components/Movie_section'

function App() {

  const api_base_url = "https://api.themoviedb.org/3";
  const api_key = import.meta.env.VITE_TMDB_API_KEY;

  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [movielist, setMovielist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  

  useEffect(() =>{

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${api_key}`
      }
    };

    const fetchMovies = async (query ='') =>{

      setIsLoading(true);
      setError(null);

      try{
        const endpoint = query ? `${api_base_url}/search/movie?query=${encodeURIComponent(query)}` : `${api_base_url}/discover/movie?sort_by=popularity.desc`;
        const response = await fetch(endpoint, options);

        if(!response.ok){
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();

        if(data.response==false){
          setError(data.Error || "Failed to fetch movies.");
          setMovielist([]);
          return;
        }

        setMovielist(data.results || []);
        console.log(data.results);

      }catch(err){
        console.error(`Error fetching movies: ${err}`);
        setError("Failed to fetch movies. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies(searchTerm);
  }, [api_key, searchTerm])

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <Header />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Movie_section error={error} isLoading={isLoading} movielist={movielist} />
      </div>
    </main>
  )
}

export default App

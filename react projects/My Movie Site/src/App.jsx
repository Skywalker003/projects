import './App.css'
import { useState, useEffect, useRef } from 'react'
import {useDebounce} from 'react-use'
import Header from './components/Header'
import Search from './components/Search'
import Movie_section from './components/Movie_section'

function App() {

  const api_base_url = "https://api.themoviedb.org/3";
  const api_key = import.meta.env.VITE_TMDB_API_KEY;

  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [movielist, setMovielist] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const allMoviesRef = useRef(null);

  useDebounce(() => {
    setDebouncedSearchTerm(searchTerm);
  }, 1000 , [searchTerm]);

  useEffect(() =>{

    const fetchMovies = async (query ='') =>{

      setIsLoading(true);
      setError(null);

      try{
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${api_key}`
          }
        };

        const endpoint = query ? `${api_base_url}/search/movie?query=${encodeURIComponent(query)}` : `${api_base_url}/discover/movie?sort_by=
vote_count.desc`;
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

    fetchMovies(debouncedSearchTerm);
  }, [api_key, debouncedSearchTerm])

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${api_key}`
          }
        };

        const response = await fetch(`${api_base_url}/discover/movie?sort_by=popularity.desc`, options);

        if (!response.ok) {
          throw new Error("Failed to fetch trending movies");
        }

        const data = await response.json();
        setTrendingMovies((data.results || []).slice(0, 5));
      } catch (err) {
        console.error(`Error fetching trending movies: ${err}`);
      }
    };

    fetchTrendingMovies();
  }, [api_key]);

  useEffect(() => {
    if (!debouncedSearchTerm.trim() || isLoading) return;

    allMoviesRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, [debouncedSearchTerm, isLoading, movielist.length, error]);

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <Header />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Movie_section
          error={error}
          isLoading={isLoading}
          movielist={movielist}
          trendingMovies={trendingMovies}
          allMoviesRef={allMoviesRef}
        />
      </div>
    </main>
  )
}

export default App

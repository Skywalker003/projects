import Movie from "./Movie";
import Spinner from "./Spinner";
import Trending from "./Trending";

export default function Movie_section({error, isLoading, movielist, trendingMovies, allMoviesRef}) {
    return(
        <div className="all-movies">
            <h2 className="mt-8 ml-4 text-left">
                Trending Movies
            </h2>
            <div className="trending">
                <ul>
                    {trendingMovies.map((movie, index) => 
                    <li key={movie.id}>
                        <Trending movie={movie} index={index} />
                    </li>
                    )}
                </ul>
            </div>
            <h2 ref={allMoviesRef} className="mt-8 ml-4 text-left">
                All Movies
            </h2>
            {isLoading ? <Spinner/> : error ? <p className="text-red-500">{error}</p> : 
            <ul className="grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {movielist.map(movie => <Movie key={movie.id} movie={movie} />)}
            </ul>}
        </div>
    )
}

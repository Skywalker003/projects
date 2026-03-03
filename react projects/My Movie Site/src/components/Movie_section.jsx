import Movie from "./Movie";
import Spinner from "./Spinner";

export default function Movie_section({error, isLoading, movielist}) {
    return(
        <div className="all-movies">
            <h2 className="mt-8 ml-4 text-left">
                All Movies
            </h2>
            {isLoading ? <Spinner/> : error ? <p className="text-red-500">{error}</p> : 
            <ul>
                {movielist.map(movie => <Movie key={movie.id} movie={movie} />)}
            </ul>}
        </div>
    )
}
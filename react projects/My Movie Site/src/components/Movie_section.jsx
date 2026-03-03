import Movie from "./Movie";

export default function Movie_section({error, isLoading, movielist}) {
    return(
        <div className="card-container">
            <h2>
                all movies
            </h2>
            {isLoading ? <p className="text-blue-500">Loading movies...</p> : error ? <p className="text-red-500">{error}</p> : 
            <ul>
                {movielist.map(movie => <Movie key={movie.id} movie={movie} />)}
            </ul>}
        </div>
    )
}
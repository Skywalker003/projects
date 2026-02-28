import Movie from "./Movie";

export default function Movie_section() {
    return(
        <div className="card-container">
            <Movie title="The Shawshank Redemption" rating={9.3} liked={false} />
            <Movie title="The Godfather" rating={9.3} liked={false} />
            <Movie title="The Dark Knight" rating={9.3} liked={false} />
            <Movie title="Pulp Fiction" rating={9.3} liked={false} />
        </div>
    )
}
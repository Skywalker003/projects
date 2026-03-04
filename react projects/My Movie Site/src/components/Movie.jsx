import React from "react";

export default function Movie({ movie: {title, vote_average, poster_path, release_date, original_language} }) {
    return(
       <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
            <div className="mt-4">
                <h3>{title}</h3>
            </div>
            <div className="content">
                <div className="rating">
                    <img src="./star.svg" alt="Star Rating" />
                    <p>{vote_average==0 ? "N/A": Math.ceil(vote_average)}</p>
                </div>

                <span>⋅</span>

                <p className="lang">{original_language.toUpperCase()}</p>

                <span>⋅</span>
                
                <p className="year">{release_date ? release_date.split("-")[0] : "N/A"}</p>

            </div>
       </div>
    )
}

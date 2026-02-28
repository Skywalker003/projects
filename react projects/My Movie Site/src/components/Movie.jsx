import React from "react";

export default function Movie({title, rating, liked}) {
    const [isLiked, setIsLiked] = React.useState(liked);
    return(
        <div className="card">
            <h2>{title}</h2>
            <h3>Rating: {rating}</h3>
            <button className="like-btn" onClick={() => setIsLiked(!isLiked)}>{isLiked ? "Liked❤️" : "Like🤍"}</button>
        </div>
    )
}
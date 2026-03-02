import React from "react";

export default function Movie({title, rating, liked}) {
    const [isLiked, setIsLiked] = React.useState(liked);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        console.log(`the movie ${title} is ${isLiked ? "liked": "unliked"}`)
    }, [isLiked, title])

    React.useEffect(() => {
        console.log(`the card is rendered`)
    }, [])

    return(
        <div className="card" onClick={() => setCount((prev) => prev + 1)}>
            <h2>{title}</h2>
            <h3>Rating: {rating}</h3>
            {count!=0 &&<p>viewers: {count}</p>}
            <button className="like-btn" onClick={() => setIsLiked(!isLiked)}>{isLiked ? "Liked❤️" : "Like🤍"}</button>
        </div>
    )
}
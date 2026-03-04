import React from 'react'

export default function Trending({ movie: {title, poster_path}, index }) {
  return (
    <>
        <p>{index + 1}</p>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
    </>
  )
}

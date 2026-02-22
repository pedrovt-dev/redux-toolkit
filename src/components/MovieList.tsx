import React from "react";
import { useSelector } from 'react-redux'; // Obtener datos del estado

export const MovieList = () => {
    const movies = useSelector((state) => state.movies.movies);
    console.log(movies);
    return (
        <>
            <h1>MovieList</h1>
            {movies.map((movie) => (
                <div key={movie.id}>{movie.name}</div>
            ))}
        </>
    )
}
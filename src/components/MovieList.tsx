import { useSelector } from 'react-redux'; // Obtener datos del estado
import type { RootState } from '../store/store';

export const MovieList = () => {
    const movies = useSelector((state: RootState) => state.movies.movies);
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
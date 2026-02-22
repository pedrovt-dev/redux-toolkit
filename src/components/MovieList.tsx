import { useDispatch, useSelector } from 'react-redux'; // Obtener datos del estado
import type { AppDispatch, RootState } from '../store/store';
import { addMovie } from '../store/slices/movieSlice';

export const MovieList = () => {
    const movies = useSelector((state: RootState) => state.movies.movies); // Para obtener el listado de peliculas
    const dispatch = useDispatch<AppDispatch>(); // para realizar una accion;
    const newMovie = { id: 3, name: 'Otra peli' };
    console.log(movies);
    return (
        <>
            <h1>MovieList</h1>
            {movies.map((movie) => (
                <div key={movie.id}>{movie.name}</div>
            ))}
            <button onClick={() => dispatch(addMovie(newMovie))}></button >
        </>
    )
}
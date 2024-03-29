import {useState, useEffect} from 'react'
import MovieCard from '../pages/MovieCard'
import styles from './Movie_TvShow.module.css'
function Movie(){
    const [movieList, setMovieList] = useState([])
    const FilmesFavoritos = ()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGQ4NmQ0NWNhYjY3ODFkZmVkMjRmMTI3MTYzMTMzYiIsInN1YiI6IjY1ZjlkY2MyNzc3NmYwMDE3ZDEyYjljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i8WWFG1vQG8aBY7InH3tjfOH-uJn95yuAQnq4cdS9to'
            }
        };
        // process.env.REACT_APP_TOKEN

        fetch('https://api.themoviedb.org/3/account/21120431/favorite/movies?language=pt-BR&page=1&sort_by=created_at.asc',options)
        .then(response => response.json())
        .then(response => setMovieList(response.results))
    }

    useEffect(()=>{
        FilmesFavoritos()
    }, [])

    console.log(movieList)

    return(
        <div className={styles.movie_tvshow_container}>
            {movieList.length === 0 && <p>Carregando</p>}
            {movieList.map((movie)=>(
                <MovieCard movie={movie}/>
            ))}
        </div>
    )

}

export default Movie
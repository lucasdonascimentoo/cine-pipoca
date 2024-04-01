import {useState, useEffect} from 'react'
import MovieCard from './MovieCard'
import styles from '../styles/Movie_TvShow.module.css'
function Movie(){
    const [movieList, setMovieList] = useState([])
    const FilmesFavoritos = ()=>{
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer '+ process.env.REACT_APP_TOKEN
        }
    }
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
                <MovieCard movie={movie} type={'movie'}/>
            ))}
        </div>
    )

}

export default Movie
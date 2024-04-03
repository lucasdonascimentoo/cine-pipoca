import {useState, useEffect} from 'react'
import {FaStar} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import styles from '../styles/MovieCard.module.css'
import MovieCard from './MovieCard'
function TvShow(){
    const [seriesList, setSeriesList] = useState([])
    const SeriesFavoritos = ()=>{
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN
            }
        };
        
        fetch('https://api.themoviedb.org/3/account/21120431/favorite/tv?language=pt-BR&page=1&sort_by=created_at.asc', options)
            .then(response => response.json())
            .then(response => setSeriesList(response.results))
    }

    useEffect(()=>{
        SeriesFavoritos()
    }, [])

    
    return(
        <div className={styles.movie_tvshow_container}>
            {seriesList.length === 0 && <p className={styles.carregando}>Carregando...</p>}
            {seriesList.map((tvshow)=>(
                <MovieCard movie={tvshow} type={'tv'}/>
            ))}
        </div>
    )
}

export default TvShow
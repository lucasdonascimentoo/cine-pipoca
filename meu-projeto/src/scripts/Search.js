import {useState, useEffect} from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'
import MovieCard from "../components/MovieCard"
import styles from '../styles/MovieCard.module.css'

function Search_Movies(){
    const { search } = useLocation()
    const query = new URLSearchParams(search).get('q')
    const [multi, setMulti] = useState([])
    const Search = () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN
        }
      };

      fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=pt-BR&page=1`, options)
        .then(response => response.json())
        .then(response => setMulti(response.results))
}
        useEffect(()=>{
            Search()
        }, [query])

        console.log(multi)
        if (multi.length > 0)
          return(
            <div className={styles.movie_tvshow_container}>
                <h1>Resultados para: <span>{query}</span></h1>
                {multi.length === 0 && <p>Carregando</p>}
                {<MovieCard movie={multi[0]} type = {multi[0].media_type}/> }
            </div>
            )
        return (
            <div>
                <h1>Nenhum resultado encontrado para: <span>{query}</span></h1>
            </div>
        )

}

export default Search_Movies
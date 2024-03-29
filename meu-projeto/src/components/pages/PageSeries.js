import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {FaStar} from 'react-icons/fa'
import {BsHourglassSplit, BsFillFileEarmarkTextFill} from 'react-icons/bs'
import styles from './PageMovie.module.css'
function PageSeries(){
    const {id} = useParams()
    const [serie, setSeries] = useState([])
    const PaginaSerie = () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGQ4NmQ0NWNhYjY3ODFkZmVkMjRmMTI3MTYzMTMzYiIsInN1YiI6IjY1ZjlkY2MyNzc3NmYwMDE3ZDEyYjljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i8WWFG1vQG8aBY7InH3tjfOH-uJn95yuAQnq4cdS9to'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/tv/${id}?language=pt-BR`, options)
            .then(response => response.json())
            .then(response => setSeries(response))
}
        useEffect(()=>{
            PaginaSerie()
        }, [])

console.log(serie)
    return <div>
        <div className={styles.movie_card_container}>
                    <div className={styles.movie_card}>
                        <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}/>
                        <p>{serie.tagline}</p>
                        <h3 className={styles.paragrafo}>{serie.title}</h3>
                        <p className={styles.paragrafo}><FaStar/>{serie.vote_average}</p>
                        {/* <p>{`${movie.genres}`}</p> */}
                        
                        <h3 className={styles.paragrafo}><BsHourglassSplit/> Duração:</h3>
                        <p>{serie.number_of_episodes} episódios</p>
                        <p>{serie.number_of_seasons} temporada(s)</p>
                        <div>
                            <h3 className={styles.paragrafo}><BsFillFileEarmarkTextFill/> Sinopse:</h3>
                            <p className={styles.paragrafo}>{serie.overview}</p>
                        </div>

                    </div>
        </div>
    </div>

}
export default PageSeries
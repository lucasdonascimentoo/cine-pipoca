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
        <div className={styles.movie_card}>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}/>
                        <h3>{serie.title}</h3>
                        <p>{serie.tagline}</p>
                        <p className={styles.paragrafo}><FaStar/>{serie.vote_average}</p>
                        {/* <p>{`${movie.genres}`}</p> */}
                        
                        <h3><BsHourglassSplit/> Duração:</h3>
                        <p>{serie.runtime} minutos</p>
                        <h3><BsFillFileEarmarkTextFill/> Sinopse:</h3>
                        <p>{serie.overview}</p>

                    </div>
        </div>
    </div>

}
export default PageSeries
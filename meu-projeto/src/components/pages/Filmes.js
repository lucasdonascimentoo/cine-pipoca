import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import {useState, useEffect} from 'react'

import styles from './FilmesSeries.module.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

function Filmes(){
    const [movies, setMoviesList] = useState([])
    const [error, setError] = useState(null)

    const FilmesFavoritos = ()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              // Replace the token below with your own!
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGQ4NmQ0NWNhYjY3ODFkZmVkMjRmMTI3MTYzMTMzYiIsInN1YiI6IjY1ZjlkY2MyNzc3NmYwMDE3ZDEyYjljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i8WWFG1vQG8aBY7InH3tjfOH-uJn95yuAQnq4cdS9to'
            }
        };

        fetch('https://api.themoviedb.org/3/account/21120431/favorite/movies?language=pt-BR&page=1&sort_by=created_at.asc',options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            return response.json()
        })
        .then(response => setMoviesList(response.results))
        .catch(error => setError(error.message))
    }

    useEffect(()=>{
        FilmesFavoritos()
    }, [])

    return(
        <div className={styles.filmes_series}>
            <Swiper
            autoplay={{delay: 2500}}
            modules={[Autoplay]}>
                {!error && (
                    <>
                    {movies.map(slide => (
                        <SwiperSlide key={slide.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${slide.poster_path}`} alt={slide.name}/>
                        </SwiperSlide>
                    ))}
                    {!movies.length && (
                        <SwiperSlide>
                            <div className={styles.empty}>No movies found!</div>
                        </SwiperSlide>
                    )}
                    </>
                )}
                {error && (
                    <SwiperSlide>
                        <div className={styles.error}>{error}</div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default Filmes
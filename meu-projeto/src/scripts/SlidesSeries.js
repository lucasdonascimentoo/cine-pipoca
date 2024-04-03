import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import {useState, useEffect} from 'react'

import styles from '../styles/FilmesSeries.module.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
function SlideSeries(){
    const [series, setSeriesList] = useState([])
    const [error, setError] = useState(null)
    
    const SeriesFavoritos = ()=>{
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN
                }
            };
            
            fetch('https://api.themoviedb.org/3/account/21120431/favorite/tv?language=pt-BR&page=1&sort_by=created_at.asc', options)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                return response.json()
        })
        .then(response => setSeriesList(response.results))
        .catch(error => setError(error.message))
    }

    useEffect(()=>{
        SeriesFavoritos()
    },[])

    return(
        <div className={styles.filmes_series}>
        <Swiper
            autoplay={{delay: 2500}}
            modules={[Autoplay]}>
                {!error && (
                    <>
                    {series.map(slide => (
                        <SwiperSlide key={slide.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${slide.poster_path}`} alt={slide.name}/>
                        </SwiperSlide>
                    ))}
                    {!series.length && (
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

export default SlideSeries
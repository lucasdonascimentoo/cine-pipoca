import {useState, useEffect} from 'react'
import {FaStar} from 'react-icons/fa'

function TvShow(){
    const [seriesList, setSeriesList] = useState([])
    const SeriesFavoritos = ()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGQ4NmQ0NWNhYjY3ODFkZmVkMjRmMTI3MTYzMTMzYiIsInN1YiI6IjY1ZjlkY2MyNzc3NmYwMDE3ZDEyYjljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i8WWFG1vQG8aBY7InH3tjfOH-uJn95yuAQnq4cdS9to'
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
        <div>
            {seriesList.map((tvshow)=>(
                <div>
                    <img  src={`https://image.tmdb.org/t/p/w500${tvshow.poster_path}`}/>
                    <h1><FaStar/>{`${tvshow.vote_average.toFixed(2)}`}</h1>
                </div>
            ))}
        </div>
    )
}

export default TvShow
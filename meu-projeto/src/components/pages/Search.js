import {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import Movie from '../scripts/Movie'
import PageSeries from './PageSeries' 
import PageMovie from './PageMovie' 
function Search_Movies(){
    const [searchParams] = useSearchParams()
    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")
    const Search = () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGQ4NmQ0NWNhYjY3ODFkZmVkMjRmMTI3MTYzMTMzYiIsInN1YiI6IjY1ZjlkY2MyNzc3NmYwMDE3ZDEyYjljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i8WWFG1vQG8aBY7InH3tjfOH-uJn95yuAQnq4cdS9to'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=pt-BR&page=1`, options)
        .then(response => response.json())
        .then(response => setMovies(response.results))
}
        useEffect(()=>{
            Search()
        }, [])

        console.log(movies)
        return(
        <div>
            <h1>Resultados para: <span>{query}</span></h1>
          
        </div>
        )
}

export default Search_Movies
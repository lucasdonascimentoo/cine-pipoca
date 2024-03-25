import {useState, useEffect} from 'react'
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
            
            fetch('https://api.themoviedb.org/3/account/21120431/favorite/movies?language=pt-BR&page=1&sort_by=created_at.asc',options)
            .then(response => response.json())
            .then(response => setMovieList(response.results))
    }

    useEffect(()=>{
        FilmesFavoritos()
    }, [])

    console.log(movieList)
    return(
        <div>
            {movieList.map((movie)=>(
                <img  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            ))}
        </div>
    )
}

export default Movie
async function FilmesFavoritos (){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGQ4NmQ0NWNhYjY3ODFkZmVkMjRmMTI3MTYzMTMzYiIsInN1YiI6IjY1ZjlkY2MyNzc3NmYwMDE3ZDEyYjljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i8WWFG1vQG8aBY7InH3tjfOH-uJn95yuAQnq4cdS9to'
        }
      };
        
    const response = await fetch('https://api.themoviedb.org/3/account/21120431/favorite/movies?language=pt-BR&page=1&sort_by=created_at.asc',options)
    return response.json();
};

export {FilmesFavoritos}
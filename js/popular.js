async function showMostPopularMovies() {
  const datos = await getJsonFromAPI(POPULARITY_API_URL);
  let peliculasDivs = "";
  datos.results.forEach((pelicula) => {
    /*       peliculas += `
                          <div class="pelicula">
                              <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                              <h3 class="titulo">${pelicula.title}</h3>
                          </div>
                      `; */
    peliculasDivs += `
                      <div class="pelicula">
                          <a href="#"><img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt=""></a>
                      </div>
                  `;
  });
  document.getElementById("popular-carousel").innerHTML = peliculasDivs;
}

showMostPopularMovies();

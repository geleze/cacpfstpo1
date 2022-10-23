async function getMainMovie() {
    const datos = await getJsonFromAPI(TRENDING_WEEK_API_URL);
    let movie = datos.results[0];
    let backdropPath = IMG_URL + movie.backdrop_path;
    let background = "linear-gradient(rgba(0, 0, 0, .50) 0%, rgba(0,0,0,.50) 100%), url('" + backdropPath + "')";
    document.querySelector(".pelicula-principal .contenedor .titulo").innerHTML = movie.title;
    document.querySelector(".pelicula-principal .contenedor  p").innerHTML = movie.overview;
    document.querySelector(".pelicula-principal").style.background = background;
    document.querySelector(".pelicula-principal").style.backgroundRepeat = "no-repeat";
    document.querySelector(".pelicula-principal").style.backgroundSize = "cover";
  
    document.getElementById("pelicula-principal-play").addEventListener('click', () => {
      document.getElementById(movie.id).click();
    })
  
  }
  
  getMainMovie();
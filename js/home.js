async function getMainMovie() {
    const datos = await getJsonFromAPI(TRENDING_WEEK_API_URL);
    let posterPath = IMG_URL + datos.results[0].poster_path;
    let backdropPath = IMG_URL + datos.results[0].backdrop_path;
    let title = datos.results[0].title;
    let description = datos.results[0].overview;
    let background = "linear-gradient(rgba(0, 0, 0, .50) 0%, rgba(0,0,0,.50) 100%), url('" + backdropPath + "')";
    document.querySelector(".pelicula-principal .contenedor .titulo").innerHTML = title;
    document.querySelector(".pelicula-principal .contenedor  p").innerHTML = description;
    document.querySelector(".pelicula-principal").style.background = background;
    document.querySelector(".pelicula-principal").style.backgroundRepeat = "no-repeat";
    document.querySelector(".pelicula-principal").style.backgroundSize = "cover";
  }
  
  getMainMovie();
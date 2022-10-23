async function getMainMovie() {
    const datos = await getJsonFromAPI(TRENDING_WEEK_API_URL);
    let movie = datos.results[0];
    let backdropPath = IMG_URL + movie.backdrop_path;
    let background = "linear-gradient(rgba(0, 0, 0, .50) 0%, rgba(0,0,0,.50) 100%), url('" + backdropPath + "')";
    document.querySelector(".main-movie .container .title").innerHTML = movie.title;
    document.querySelector(".main-movie .container  p").innerHTML = movie.overview;
    document.querySelector(".main-movie").style.background = background;
    document.querySelector(".main-movie").style.backgroundRepeat = "no-repeat";
    document.querySelector(".main-movie").style.backgroundSize = "cover";
  
    document.getElementById("main-movie-play").addEventListener('click', () => {
      document.getElementById(movie.id).click();
    })
  
  }
  
  getMainMovie();
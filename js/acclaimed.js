
async function showMostAcclaimedMovies() {
    const container = document.getElementById("acclaimed-container");
  const datos = await getJsonFromAPI("https://api.themoviedb.org/3/movie/top_rated?api_key=1cf50e6248dc270629e802686245c2c8&language=es-AR&page=1");
  datos.results.forEach((movie) => {
    const { title, poster_path, vote_average, overview, id } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
         <img src="${
           poster_path
             ? IMG_URL + poster_path
             : "http://via.placeholder.com/1080x1580"
         }" alt="${title}">

        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getColor(vote_average)}">${vote_average}</span>
        </div>

        <div class="overview">

            <h3>Overview</h3>
            ${overview}
            <br/> 
            <button class="know-more" id="${id}"><i class="fas fa-info-circle"></i>+Info</button>
        </div>
    
    `;

    container.appendChild(movieEl);

    document.getElementById(id).addEventListener("click", () => {
      console.log(id);
      openNav(movie);
    });
  });
}

showMostAcclaimedMovies();

function getColor(vote) {
    if(vote>= 8){
        return 'green'
    }else if(vote >= 5){
        return "orange"
    }else{
        return 'red'
    }
}

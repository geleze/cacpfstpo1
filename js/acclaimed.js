async function showMostAcclaimedMovies() {
  const container = document.getElementById("acclaimed-container");
  const datos = await getJsonFromAPI(TOP_RATED_API_URL);
  datos.results.forEach((movie) => {
    const { title, poster_path, vote_average, overview, id } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
        <img src="${IMG_URL + poster_path}" alt="${title}">
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
  });
}

showMostAcclaimedMovies();

function getColor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

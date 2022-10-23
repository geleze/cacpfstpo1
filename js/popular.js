async function showMostPopularMovies() {
  const container = document.getElementById("popular-container");
  const datos = await getJsonFromAPI(POPULARITY_API_URL);
  datos.results.forEach((movie) => {
    const { title, poster_path, vote_average, overview, id } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = /*html*/
    `
        <img src="${IMG_URL + poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getVotingColor(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
            <br/> 
            <button class="play-card-button" id="${id}"><i class="fas fa-play"></i>Reproducir</button>
        </div>
    `;
    container.appendChild(movieEl);

    document.getElementById(id).addEventListener('click', () => {
      openNav(movie)
    })

  });
}

showMostPopularMovies();




const API_KEY = "api_key=1cf50e6248dc270629e802686245c2c8";
const BASE_URL = "https://api.themoviedb.org/3";
const TRENDING_WEEK_API_URL = BASE_URL + "/trending/movie/week?" + API_KEY + "&language=es-AR";
const POPULARITY_API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY + "&language=es-AR";
const TOP_RATED_API_URL = BASE_URL + "/discover/movie?sort_by=vote_average.desc&" + API_KEY + "&language=es-AR";
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = BASE_URL + "/search/movie?" + API_KEY;




const ERROR_KEY = "ERROR";

async function getJsonFromAPI(url) {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return await response.json();
    } else {
      return ERROR_KEY;
    }
  } catch (error) {
    return ERROR_KEY;
  }
}






// -------------------------------------- CAROUSEL -------------------------------------- //
const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- Hover ----- -----
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});
// ------------------------------------ FIN CAROUSEL ------------------------------------ //
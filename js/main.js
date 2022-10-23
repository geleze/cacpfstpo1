const BASE_URL = "https://api.themoviedb.org/3/";
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const LANG = "&language=es-AR";
const API_KEY = "api_key=1cf50e6248dc270629e802686245c2c8";

// *** API Rest Services
//Popular
//https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8&language=es-AR
const POPULARITY_API_URL = BASE_URL + "discover/movie?sort_by=popularity.desc&" + API_KEY + LANG;
//Trending
//https://api.themoviedb.org/3/trending/movie/week?api_key=1cf50e6248dc270629e802686245c2c8&language=es-AR
const TRENDING_WEEK_API_URL = BASE_URL + "trending/movie/week?" + API_KEY + LANG;
//Aclaimed
//https://api.themoviedb.org/3/movie/top_rated?api_key=1cf50e6248dc270629e802686245c2c8&language=es-AR&page=1
const TOP_RATED_API_URL = BASE_URL +"movie/top_rated?" + API_KEY + LANG + "&page=1";


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

function getVotingColor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
}

const carouselContainers = [...document.querySelectorAll('.carousel-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

carouselContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

const overlayContent = document.getElementById('overlay-content');
/* Open when someone clicks on the span element */
function openNav(movie) {
  let id = movie.id;
  fetch(BASE_URL + '/movie/'+id+'/videos?'+API_KEY).then(res => res.json()).then(videoData => {
    if(videoData){
      document.getElementById("myNav").style.width = "100%";
      if(videoData.results.length > 0){
        var embed = [];
        var dots = [];
        videoData.results.forEach((video, idx) => {
          let {name, key, site} = video

          if(site == 'YouTube'){
        
            embed.push(`
              <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="${name}" class="embed hide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
          `)

            dots.push(`
              <span class="dot">${idx + 1}</span>
            `)
          }
        })
        
        var content = /*html*/
          `
          <h1 class="no-results">${movie.original_title}</h1>
          <br/>
          
          ${embed.join('')}
          <br/>

          <div class="dots">${dots.join('')}</div>
          `
        overlayContent.innerHTML = content;
        activeSlide=0;
        showVideos();
      }else{
        overlayContent.innerHTML = `<h1 class="no-results">No Results Found</h1>`
      }
    }
  })
}

function showVideos(){
  let embedClasses = document.querySelectorAll('.embed');
  let dots = document.querySelectorAll('.dot');

  totalVideos = embedClasses.length; 
  embedClasses.forEach((embedTag, idx) => {
    if(activeSlide == idx){
      embedTag.classList.add('show')
      embedTag.classList.remove('hide')

    }else{
      embedTag.classList.add('hide');
      embedTag.classList.remove('show')
    }
  })

  dots.forEach((dot, indx) => {
    if(activeSlide == indx){
      dot.classList.add('active');
    }else{
      dot.classList.remove('active')
    }
  })
}

// ******** FUNCIONES COMUNES DE VALIDACIÓN DE FORMULARIOS ******** //

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// show success message
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = "form-control success";
}

//check email is valid
function checkEmail(input) {
    let success = true;
    const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email inválido");
    success = false;
  }
  return success;
}

//check required fields
function checkRequired(inputArr) {
  let success = true;
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `Campo requerido`);
      success = false;
    } else {
      showSuccess(input);
    }
  });
  return success;
}

//check input lenght
function checkLength(input, min, max) {
    let success = true;
    if (input.value.length < min) {
        showError(input, `Debe tener al menos ${min} caracteres`);
        success = false;
    } else if (input.value.length > max) {
        showError(input, `Debe tener menos que ${max} caracteres`);
        success = false;
    } else {
        showSuccess(input);
    }
    return success;
}

// ******** FIN FUNCIONES COMUNES DE VALIDACIÓN DE FORMULARIOS ******** //



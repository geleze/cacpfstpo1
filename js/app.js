const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() { /* si el menú está abierto lo cierra, y a la inversa*/
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

/*selecciona todos los refs del menú */
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

/* observer para detectar en que sección se está navegando*/
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

      if (entry.isIntersecting) {
        document.querySelector(".menu a.selected").classList.remove("selected");
        menuLink.classList.add("selected");
      }
    });
  },
  { rootMargin: "-30% 0px -70% 0px" }
);

menuLinks.forEach((menuLink) => {
  /* hace que se cierre el menú cuando se selecciona una sección*/
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_opened");
  });

  /*marca la opción del menú en función de la sección que detectó el ovserver*/
  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});
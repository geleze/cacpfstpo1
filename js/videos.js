const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

leftArrow.addEventListener("click", () => {
  if (activeSlide > 0) {
    activeSlide--;
  } else {
    activeSlide = totalVideos - 1;
  }

  showVideos();
});

rightArrow.addEventListener("click", () => {
  if (activeSlide < totalVideos - 1) {
    activeSlide++;
  } else {
    activeSlide = 0;
  }
  showVideos();
});

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
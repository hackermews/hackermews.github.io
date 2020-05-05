//Carousel code

const carousel = document.getElementById("carousel");
const images = carousel.children;
var cur = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function hideImage(i) {
  images[i].style.display = "none";
}

function showImage(i) {
  images[i].style.display = "block";
}

function swapImage() {
  let i = getRandomInt(0, images.length);
  hideImage(cur);
  cur = i;
  showImage(cur);
}

swapImage();
setInterval(swapImage, 5000);

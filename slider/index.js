
const imgs = [
  'https://wowslider.com/sliders/demo-5/data/images/sweden.jpg',
  'http://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hanv9909.jpg',
  'https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg',
  'http://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg',
  'http://wowslider.com/sliders/demo-18/data1/images/new_york.jpg',
  'https://geoportal.kreis-herford.de/kategorie/Umgebung/img/landscape/01.jpg',
];

const slider = document.querySelector('#slider');

let currentSlide = 0;
slider.src = imgs[currentSlide];

function nextSlide() {
  slider.src = imgs[currentSlide];

  if (currentSlide < imgs.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
}

function startSlideshow() {
  setInterval(
    nextSlide,
    2000,
  );
}

const startBtn = document.querySelector('#start-slideshow');
startBtn.addEventListener('click', startSlideshow);

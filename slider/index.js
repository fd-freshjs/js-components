
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
for (const src of imgs) {
  const img = document.createElement('img');
  img.src = src;
  img.style.width = '400px';

  slider.append(img);
}

const startSlide = slider.children[0];
startSlide.classList.add('show');

function nextSlide() {
  for (const elem of slider.children) {
    elem.classList.remove('show');
  }

  const slide = slider.children[currentSlide];
  slide.classList.add('show');

  currentSlide = (currentSlide + 1) % imgs.length;
}

function startSlideshow() {
  setInterval(
    nextSlide,
    2000,
  );
}

const startBtn = document.querySelector('#start-slideshow');
startBtn.addEventListener('click', startSlideshow);

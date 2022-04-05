
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
  
  currentSlide++;
  if (currentSlide >= imgs.length) {
    currentSlide = 0;
  }

  const slide = slider.children[currentSlide];
  slide.classList.add('show');
}

function prevSlide() {
  for (const elem of slider.children) {
    elem.classList.remove('show');
  }
  
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = imgs.length - 1;
  }

  const slide = slider.children[currentSlide];
  slide.classList.add('show');
}

const prevBtn = document.querySelector('#prev-slide');
prevBtn.addEventListener('click', prevSlide);

const nextBtn = document.querySelector('#next-slide');
nextBtn.addEventListener('click', nextSlide);

/* ------------ */

let id = null;
let timerRunning = false;

function startSlideshow() {
  if (timerRunning === true) {
    return
  }

  id = setInterval(
    nextSlide,
    2000,
  );
  timerRunning = true;
}

function stopSlideShow() {
  clearInterval(id);
  timerRunning = false;
}

const startBtn = document.querySelector('#start-slideshow');
startBtn.addEventListener('click', startSlideshow);

const stopBtn = document.querySelector('#stop-slideshow');
stopBtn.addEventListener('click', stopSlideShow);

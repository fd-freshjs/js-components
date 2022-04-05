const clock = document.querySelector('#clock');
let seconds = 0;

const id = setInterval(() => {
  clock.textContent = seconds;
  seconds++;
}, 1000);

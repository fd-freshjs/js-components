const clock = document.querySelector('#clock');

const id = setInterval(() => {
  clock.textContent += 'a';
}, 1000);

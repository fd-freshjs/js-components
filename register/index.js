const form = document.querySelector('#reg-form');

const loginData = {
  email: '',
  phone: '',
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if(loginData.email === '' || !loginData.email.includes('@')) {
    emailInput.style.border = '1px solid red';
    return;
  }

  if(loginData.phone === '' || isNaN(Number(loginData.phone))) {
    phoneInput.style.border = '1px solid red';
    return;
  }

  console.log(loginData);
});

/* ======================== */

const emailInput = document.querySelector('[name="email"]');
const passInput = document.querySelector('[name="password"]');
const phoneInput = document.querySelector('[name="phone"]');
const birthInput = document.querySelector('[name="birthdate"]');

function onInput(event) {
  // event.target.name
  loginData[event.target.name] = event.target.value;
}

emailInput.addEventListener('input', onInput);
passInput.addEventListener('input', onInput);
phoneInput.addEventListener('input', onInput);
birthInput.addEventListener('input', onInput);

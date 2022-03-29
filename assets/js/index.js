const mainElem = document.querySelector('main');

const links = [
  { href: 'google.com', text: 'Google' },
];

mainElem.innerHTML = NavList({ links: links });

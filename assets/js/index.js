const mainElem = document.querySelector('main');

const links = [
  { href: 'https://google.com', text: 'Google' },
];

const nav = new NavList();
nav.options = { links: links };
mainElem.append(nav.render());

const mainElem = document.querySelector('main');

const links = [
  { href: '/slider', text: 'Slider' },
];

const nav = new NavList();
nav.options = { links: links };
mainElem.append(nav.render());

const mainElem = document.querySelector('main');

const links = [
  { href: '/slider', text: 'Slider' },
  { href: '/clock', text: 'Clock' },
  { href: '/todo', text: 'TODO list' },
];

const nav = new NavList();
nav.options = { links: links };
mainElem.append(nav.render());

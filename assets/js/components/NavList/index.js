
function NavList(options = {}) {

  let listString = '';

  for (let i = 0; i < options.links.length; i++) {
    const value = options.links[i];

    listString += NavButton(value);
  }

  const NavListHTML = `
    <nav class=${options.className}>
      <ul>
        ${listString}
      </ul>
    </nav>
  `;

  return NavListHTML;
}


function NavButton(options = {}) {
  const NavButtonHTML = `
    <a class="${options.className}" href="${options.href}">${options.text}</a>
  `;

  return NavButtonHTML;
}

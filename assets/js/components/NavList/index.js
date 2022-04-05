
class NavList {
  constructor() {
    this.options = {};
    this.state = {};
  }

  isHover() {
    this.state.hover = true;
  }

  render() {
    const nav = document.createElement('nav');
    nav.className = this.options.className;

    const ul = document.createElement('ul');
    nav.append(ul);
    
    for (let i = 0; i < this.options.links.length; i++) {
      const value = this.options.links[i];

      const navBtn = NavButton(value);

      navBtn.addEventListener('mouseenter', this.isHover);
      ul.append(navBtn);
    }

    return nav;
  }
}
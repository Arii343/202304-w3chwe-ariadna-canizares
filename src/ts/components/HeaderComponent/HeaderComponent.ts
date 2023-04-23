import Component from "../Component/Component.js";

class HeaderComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "header", "header");

    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `
      <img class="logo" src="./img/pokemon-logo.svg" alt="logo Pokémon"></img>
      <nav class="navbar">
        <ul class="navbar__list">
          <li class="navbar__item"> <a class="navbar__link">Todos los Pokémon</a> </li>
          <li class="navbar__item"> <a class="navbar__link">Mis Pokémon</a> </li>
          <li class="navbar__item"> <a class="navbar__link">Detalle de Pokémon</a> </li>
        </ul> 
      </nav>`;
  }
}

export default HeaderComponent;

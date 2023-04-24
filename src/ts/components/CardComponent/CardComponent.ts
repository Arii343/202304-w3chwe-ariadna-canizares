import { type Pokemon } from "../../types";
import Component from "../Component/Component.js";

class CardComponent extends Component {
  private pokemon: Pokemon;
  constructor(parentElement: Element, public pokemonUrl: string) {
    super(parentElement, "li", "card");

    (async () => this.getPokemon())();
  }

  async getPokemon(): Promise<void> {
    const response = await fetch(this.pokemonUrl);
    const pokemonApiData = (await response.json()) as Pokemon;

    this.pokemon = pokemonApiData;

    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `
    <header class="card__header">
      <span class="card__text">#${this.pokemon.id}</span>
      <span class="card__title">${this.pokemon.name}</span>
    </header>
    <main class="card__main">
      <img class="card__img" src="${this.pokemon.sprites.other["official-artwork"].front_default}" alt="Representación de ${this.pokemon.name}"></img>
    </main>`;
  }
}

export default CardComponent;

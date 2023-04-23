import { type PokemonApiResults, type PokemonApiResponse } from "../../types";
import CardComponent from "../CardComponent/CardComponent.js";
import Component from "../Component/Component.js";

const apiUrl = "https://pokeapi.co/api/v2/";

class ListComponent extends Component {
  private pokemons: PokemonApiResponse;

  constructor(parentElement: Element) {
    super(parentElement, "main", "main");

    (async () => this.getPokemons())();
  }

  async getPokemons(): Promise<void> {
    const response = await fetch(`${apiUrl}pokemon`);
    const pokemons = (await response.json()) as PokemonApiResponse;

    this.pokemons = pokemons;

    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `<ul class="card-list"></ul>`;
    const cardList = document.querySelector(".card-list")!;

    this.pokemons.results.forEach((pokemon: PokemonApiResults) => {
      new CardComponent(cardList, pokemon.url);
    });
  }
}

export default ListComponent;

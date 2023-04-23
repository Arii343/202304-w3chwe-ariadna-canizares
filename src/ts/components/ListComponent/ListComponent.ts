import { type PokemonApiResponse } from "../../types";
import Component from "../Component/Component.js";

const apiUrl = "https://pokeapi.co/api/v2/";

class ListComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "main", "main");

    (async () => this.getPokemons())();
  }

  async getPokemons(): Promise<void> {
    const response = await fetch(`${apiUrl}pokemon`);
    const pokemons = (await response.json()) as PokemonApiResponse[];

    console.log("pokemons", pokemons);
  }

  renderHtml(): void {
    this.element.innerHTML = `<ul class="card-list"></ul>`;
  }
}

export default ListComponent;

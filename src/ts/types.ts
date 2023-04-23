export interface PokemonApiResponse {
  count: number;
  next: string | undefined;
  previous: string | undefined;
  results: PokemonApiResults[];
}

export interface PokemonApiResults {
  name: string;
  url: string;
}

export interface Pokemon {
  name: string;
  id: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

export interface PokemonApiResponse {
  count: number;
  next: string | undefined;
  previous: string | undefined;
  results: PokemonApiResponse[];
}

export interface PokemonApiResults {
  name: string;
  url: string;
}

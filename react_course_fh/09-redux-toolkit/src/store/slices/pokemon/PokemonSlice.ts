import { createSlice } from "@reduxjs/toolkit";

export interface PokemonSliceState {
  page: number;
  pokemons: Array<Record<string, never>>;
  isLoading: boolean;
}

const initialState: PokemonSliceState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    startLoadingPokemons: (state /* action: PayloadAction<number> */) => {
      state.isLoading = true;
    },

    setPokemons: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
  },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;

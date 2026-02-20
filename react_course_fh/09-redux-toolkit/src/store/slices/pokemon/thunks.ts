import { UnknownAction } from "@reduxjs/toolkit";
import { pokemonApi } from "../../../api/pokemonApi";
import { AppDispatch } from "../../store";
import { setPokemons, startLoadingPokemons } from "./PokemonSlice";

export const getPokemonsThunk = (page: number = 0) => {
  return async (dispatch: AppDispatch) => {
    dispatch(startLoadingPokemons());

    // const pokemonUrl = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${
    //   page * 10
    // }`;

    // const response = await fetch(pokemonUrl);

    // const data = await response.json();

    const pokemonUrl = `/pokemon?limit=10&offset=${page * 10}`;
    const { data } = await pokemonApi.get(pokemonUrl);

    const payload = {
      pokemons: data.results,
      page: page + 1,
    };

    dispatch(setPokemons(payload));
  };
};

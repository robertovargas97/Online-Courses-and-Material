import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsThunk } from "./store/slices/pokemon";
import { RootState } from "./store";
import { UnknownAction } from "@reduxjs/toolkit";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    pokemons = [],
    page,
  } = useSelector((state: RootState) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemonsThunk() as unknown as UnknownAction);
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />

      <span>Loading : {isLoading ? "True" : "False"}</span>

      <ul>
        {pokemons.map(({ name, url }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button
        disabled={isLoading}
        onClick={() =>
          dispatch(getPokemonsThunk(page) as unknown as UnknownAction)
        }
      >
        Next
      </button>
    </>
  );
};

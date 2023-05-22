import React from "react";
import Pokedex from "./Pokedex";
import Pokegame from "./Pokegame";
import pokemons from "./pokemons";

function App() {
  return (
    <>
      <Pokegame pokemons={pokemons}/>
    </>
  )
}

export default App;
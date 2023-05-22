import Pokedex from "./Pokedex";

const Pokegame = (props) => {
  let hand1 = [...props.pokemons];
  let hand2 = [];

  while (hand1.length > hand2.length) {
    let randomIdx = Math.floor(Math.random()*hand1.length);
    let randomPokemon = hand1.splice(randomIdx, 1)[0]
    hand2.push(randomPokemon)
  }

  let exp1 = hand1.reduce((total, pokemon) => total + pokemon.base_experience, 0);
  let exp2 = hand2.reduce((total, pokemon) => total + pokemon.base_experience, 0);


  return (
    <>
      <Pokedex pokemons={hand1} total={exp1} isWinner={exp1>exp2}/>
      <Pokedex pokemons={hand2} total={exp2} isWinner={exp2>exp1}/>
    </>
  )
}

export default Pokegame;
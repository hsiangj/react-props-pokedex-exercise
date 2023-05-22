import Pokecard from "./Pokecard";
import "./Pokedex.css"

const Pokedex = ({pokemons, total, isWinner}) => {
  let messageDisplay;
  if(isWinner) {
    messageDisplay = <p>THIS HAND WINS!</p>
  }
  return (
    <div className="Pokedex">
      <h2 className="Pokedex-header">Pokedex</h2>
      <div className="Pokedex-cards">
        {pokemons.map(pokemon => (
          <Pokecard 
            id={pokemon.id} 
            name={pokemon.name}
            type={pokemon.type}
            exp={pokemon.base_experience} />
        ))}
      </div>
      <h5>Total experience: {total}</h5>
      {messageDisplay}
    </div>
  )
}

export default Pokedex;
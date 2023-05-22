import "./Pokecard.css";

const Pokecard = ({id, name, type, exp}) => {
  let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  return (
    <div className="Pokecard">
      <h4 className="Pokecard-name">{name}</h4>
      <img className="Pokecard-img" src={imgUrl} alt=""></img>
      <p className="Pokecard-type">Type: {type}</p>
      <p className="Pokecard-exp">EXP: {exp}</p>
    </div>
  )
}


export default Pokecard;
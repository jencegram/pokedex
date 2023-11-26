import React from 'react'

function Pokecard(props) {
  // Destructure props for easier access
  const { name, type, id } = props;

  // Construct the image URL
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="pokecard">
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
      <p>Type: {type}</p>
    </div>
  );
}

export default Pokecard;


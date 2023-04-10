import React from "react";

function Character({ name, status, species, image }) {
  return (
    <div className="character">
      <img src={image} alt={name} />
      <span>name: {name}</span>
      <span>status: {status}</span>
      <span>species: {species}</span>
    </div>
  );
}

export default Character;

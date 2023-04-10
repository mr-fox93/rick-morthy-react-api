import "./App.css";
import { useState, useEffect } from "react";
import Character from "./Character";

function App() {
  const [input, setInput] = useState("");
  const [characters, setCharacters] = useState([]);
  const [number, setNumber] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${number}`)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, [number]);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="App">
      <div className="header">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={() => setNumber(number + 1)}>Next</button>
        <button onClick={() => setNumber(number - 1)}>Prev</button>
      </div>

      <div className="div">
        {filteredCharacters.map((character) => (
          <Character
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            image={character.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

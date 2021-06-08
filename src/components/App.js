import data from "../data/data.json";
import PokeList from "./PokeList";
import "../stylesheets/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi lista de Pokémon</h1>
      </header>
      <main>
        <PokeList list={data}></PokeList>
        <h2>Pokémon favoritos</h2>
      </main>
    </div>
  );
}

export default App;

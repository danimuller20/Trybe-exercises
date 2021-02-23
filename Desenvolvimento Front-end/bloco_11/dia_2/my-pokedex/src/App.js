import './App.css';
import Pokedex from './Pokedex';
import data from './data';

function App() {
  return (
    <div className="App">
      <h1 className="title">Pokedex</h1>
      <Pokedex data={data} />
    </div>
  );
}

export default App;

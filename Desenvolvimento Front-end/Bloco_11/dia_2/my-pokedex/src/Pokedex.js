import { Component } from 'react';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() { 
    return (
      <div className="main-conten">
        {this.props.data.map((pokemom) => <Pokemon poke={pokemom} key={pokemom.id} />)}
      </div>
    );
  }
}
 
export default Pokedex;
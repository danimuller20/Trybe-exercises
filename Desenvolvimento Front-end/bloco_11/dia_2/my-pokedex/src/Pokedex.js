import { Component } from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class Pokedex extends Component {
  render() { 
    return (
      <div className="main-conten">
        {this.props.data.map((pokemom) => <Pokemon poke={pokemom} key={pokemom.id} />)}
      </div>
    );
  }
}

Pokedex.propTypes = {
  data: PropTypes.array,
}
 
export default Pokedex;
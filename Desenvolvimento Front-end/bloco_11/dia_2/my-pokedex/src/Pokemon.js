import { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() { 
    const {name, type, averageWeight, image} = this.props.poke;

    return (
      <div className="poke-container">
        <ul className="poke-list">
        <li>{name}</li> <li>{type}</li> <li> Avearge Weight: {averageWeight.value} {averageWeight.measurementUnit}</li>
        </ul>
        <img className="poke-image" src={image}/>
      </div>
    );
  }
}

Pokemon.propTypes = {
  poke: PropTypes.object
};
 
export default Pokemon;
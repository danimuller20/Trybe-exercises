import { Component, Fragment } from 'react';

class Adress extends Component {
  render() { 
    const { value, handleEvent} = this.props;
    return (
      <Fragment>
        <label>Endereço:
          <input name='adress' type="text" value={value.replace(/[^a-zA-Z ]/g, "")} onChange={handleEvent}/>
        </label>
      </Fragment>
    );
  }
}
 
export default Adress;
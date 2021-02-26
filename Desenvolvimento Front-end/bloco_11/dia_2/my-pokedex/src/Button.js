import React from 'react';

class Button extends React.Component {
render() {
const { onClick, className, children } = this.props
return (
<button onClick={ onClick } className={ className }> { children } </button> 
)
}

}

export default Button;
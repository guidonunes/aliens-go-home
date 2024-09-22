import React from 'react';
import Canvas from './components/Canvas';
import PropTypes from 'prop-types';
import { getCanvasPosition } from './utils/formulas';

const App = ({message}) => {
  return(
   <Canvas
    angle={this.props.angle}
    trackMouse={ event => (this.trackMouse(event))}
   />
  )
}

App.propTypes = {
  message: PropTypes.string.isRequired
}



export default App;

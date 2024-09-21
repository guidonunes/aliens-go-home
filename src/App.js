import React from 'react';
import Canvas from './components/canvas';
import PropTypes from 'prop-types';

const App = ({message}) => {
  return(
   <Canvas />
  )
}

App.propTypes = {
  message: PropTypes.string.isRequired
}



export default App;

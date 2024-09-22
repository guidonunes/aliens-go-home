import React, { useEffect, useRef } from 'react';
import Canvas from './components/Canvas';
import PropTypes from 'prop-types';
import { getCanvasPosition } from './utils/formulas';



const App = ({angle, moveObjects}) => {
  const canvasMousePosition = useRef({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      moveObjects(canvasMousePosition.current);
  }, 10);

  return () =>  clearInterval(intervalId);
  }, [moveObjects]);

  const trackMouse = (event) => {
    canvasMousePosition.current = getCanvasPosition(event);
  };

  return(
   <Canvas
    angle={angle}
    trackMouse={ trackMouse}
   />
  )
}

App.propTypes = {
  angle: PropTypes.string.isRequired,
  moveObjects: PropTypes.func.isRequired,
}



export default App;

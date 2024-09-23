import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import App from '../../App';
import { moveObjects } from '../../features/gameSlice';

const Game = () => {
  const angle = useSelector(state => state.game.angle);
  const dispatch = useDispatch();

  const handleMoveObjects = (mousePosition) => {
    dispatch(moveObjects(mousePosition));
  };

  return (
    <App angle={angle} moveObjects={handleMoveObjects} />
  );
};


export default Game;

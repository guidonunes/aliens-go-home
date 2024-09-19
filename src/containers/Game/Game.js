import { connect } from 'react-redux';
import App from '../../App'; // Adjust the path relative to the 'Game.js' file


const mapStateToProps = (state) => ({
  message: state.message,
});


const Game = connect(
  mapStateToProps
)(App);


export default Game;

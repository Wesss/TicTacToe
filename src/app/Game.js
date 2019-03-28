import React, { Component } from "react";
import PropTypes from 'prop-types';
import Board from "./Board.js";
import GameStateDisplay from "./GameStateDisplay.js";
import Menu from "./Menu.js";

const GAME_STATE = {
  UNINITIALLIZED: "UNINITIALLIZED",
  X_MOVE: "X_MOVE",
  O_MOVE: "O_MOVE",
  X_WIN: "X_WIN",
  O_WIN: "O_WIN",
  TIE: "TIE",
};

class Game extends Component {

  static get GAME_STATE() {
    return GAME_STATE;
  }

  constructor(props) {
    super(props);
    this.state = {gameState: GAME_STATE.UNINITIALLIZED};
  }

  setGameState = (gameState) => {
    this.setState({gameState: gameState});
  }

  render() {
    return(
      <div>
        <Board gameState={this.state.gameState} setGameState={this.setGameState}/>
        <GameStateDisplay gameState={this.state.gameState}/>
        <Menu gameState={this.state.gameState} quit={this.props.quit}/>
      </div>
    );
  }
}

Game.propTypes = {
  quit: PropTypes.func.isRequired,
};

export default Game;

import React, { Component } from "react";
import GameBoard from "./GameBoard.js";
import GameStateDisplay from "./GameStateDisplay.js";
import GameMenu from "./GameMenu.js";

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
    // We leave the state ownership to the game board
    this.state = {gameState: GAME_STATE.UNINITIALLIZED};
  }

  setGameState = (gameState) => {
    this.setState({gameState: gameState});
  }

  render() {
    return(
      <div>
        <GameBoard gameState={this.state.gameState} setGameState={this.setGameState}/>
        <GameStateDisplay gameState={this.state.gameState}/>
        <GameMenu gameState={this.state.gameState}/>
      </div>
    );
  }
}

export default Game;

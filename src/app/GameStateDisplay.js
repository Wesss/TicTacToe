import React, { Component } from "react";
import Game from "./Game.js";
import "./GameStateDisplay.css";

class GameStateDisplay extends Component {

  render() {
    var message = "";
    switch (this.props.gameState) {
      case Game.GAME_STATE.X_MOVE:
        message = "X's turn";
        break;
      case Game.GAME_STATE.O_MOVE:
        message = "O's turn";
        break;
      case Game.GAME_STATE.X_WIN:
        message = "X Wins!";
        break;
      case Game.GAME_STATE.O_WIN:
        message = "O Wins!";
        break;
      case Game.GAME_STATE.TIE:
        message = "Tie!";
        break;
    }

    return(
      <div className="Game-state-display u-marginBot">{message}</div>
    );
  }
}

export default GameStateDisplay;

import React, { Component } from "react";
import GameContainer from "./GameContainer.js"
import "./TicTacToe.css"

class TicTacToe extends Component {
  render() {
    return(
      <div>
        <h1 className="Title">Tic Tac Toe!</h1>
        <GameContainer/>
      </div>
    );
  }
}

export default TicTacToe;

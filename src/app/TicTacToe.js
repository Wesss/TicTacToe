import React, { Component } from "react";
import Game from "./Game.js"
import "./TicTacToe.css"

class TicTacToe extends Component {
  render() {
    return(
      <div>
        <h1 className="Title">Tic Tac Toe!</h1>
        <Game/>
      </div>
    );
  }
}

export default TicTacToe;

import React, { Component } from "react";
import Game from "./Game.js"

const GAME_STATE = {
  LANDING: "landing",
  PLAYING: "playing"
};

class GameContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {gameState: GAME_STATE.LANDING};
  }

  clickStart = () => {
    this.setState({gameState: GAME_STATE.PLAYING});
  }

  render() {
    switch (this.state.gameState) {
      case GAME_STATE.LANDING:
        return(
          <button className="start-button" onClick={this.clickStart}>
            START
          </button>
        );
        break;
      case GAME_STATE.PLAYING:
        return(
          <Game/>
        );
        break;
    }
  }
}

export default GameContainer;

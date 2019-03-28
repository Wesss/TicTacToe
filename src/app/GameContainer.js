import React, { Component } from "react";
import Game from "./Game.js"

const STATE = {
  LANDING: "landing",
  PLAYING: "playing"
};

class GameContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {gameState: STATE.LANDING};
  }

  clickStart = () => {
    this.setState({gameState: STATE.PLAYING});
  }

  quit = () => {
    this.setState({gameState: STATE.LANDING});
  }

  render() {
    switch (this.state.gameState) {
      case STATE.LANDING:
        return(
          <button className="Button" onClick={this.clickStart}>
            START
          </button>
        );
        break;
      case STATE.PLAYING:
        return(
          <Game quit={this.quit}/>
        );
        break;
    }
  }
}

export default GameContainer;

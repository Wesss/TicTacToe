import React, { Component } from "react";

const GAME_STATE = {
  LANDING: "landing",
  PLAYING: "playing"
};

class Game extends Component {

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
          <button onClick={this.clickStart}>
            START
          </button>
        );
        break;
      case GAME_STATE.PLAYING:
        return(
          <div>
            game~
          </div>
        );
        break;
    }
  }
}

export default Game;

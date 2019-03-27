import React, { Component } from "react";

// const GAME_STATE = {
//   LANDING: "landing",
//   PLAYING: "playing"
// };

class GameStateDisplay extends Component {

  constructor(props) {
    super(props);
    // this.state = {gameState: GAME_STATE.LANDING};
  }

  // clickStart = () => {
  //   this.setState({gameState: GAME_STATE.PLAYING});
  // }

  render() {
    // switch (this.state.gameState) {
      // case GAME_STATE.LANDING:
        return(
          <div>{this.props.gameState}</div>
        );
    // }
  }
}

export default GameStateDisplay;

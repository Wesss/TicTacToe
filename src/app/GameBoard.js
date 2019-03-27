import React, { Component } from "react";

// const GAME_STATE = {
//   LANDING: "landing",
//   PLAYING: "playing"
// };

class GameBoard extends Component {

  constructor(props) {
    super(props);
    props.setGameState("PX_MOVE"); //TODO switch to constant
  }

  // clickStart = () => {
  //   this.setState({gameState: GAME_STATE.PLAYING});
  // }

  render() {
    // switch (this.state.gameState) {
      // case GAME_STATE.LANDING:
        return(
          <div>game board</div>
        );
    // }
  }
}

export default GameBoard;

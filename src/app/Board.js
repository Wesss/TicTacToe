import React, { Component } from "react";
import _ from "lodash";
import Game from "./Game";
import Tile from "./Tile";

const EMPTY_BOARD = [
  [Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY],
  [Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY],
  [Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY]
];

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {board: EMPTY_BOARD}
    props.setGameState(Game.GAME_STATE.X_MOVE);
  }

  // clickStart = () => {
  //   this.setState({gameState: GAME_STATE.PLAYING});
  // }

  render() {
    var boardRender = _.map(this.state.board, function(column) {
      return _.map(column, function(tile) {
        return <Tile contents={tile}/> // TODO address keys
      });
    });
    return(
      <div>
        {boardRender}
      </div>
    );
  }
}

export default Board;

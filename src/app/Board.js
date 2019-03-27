import React, { Component } from "react";
import PropTypes from 'prop-types';
import _ from "lodash";
import Game from "./Game";
import Tile from "./Tile";
import "./Board.css";

const EMPTY_BOARD = [
  [Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY],
  [Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY],
  [Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY]
];

class Board extends Component {

  static getGameState(board) {
    return Game.GAME_STATE.X_MOVE;
  }

  static getTileStateChange(oldTile, gameState) {
    return Tile.TILE_STATE.X;
  }
  
  /*
   * While it is more intuitive for each Tile component to be aware of its own state,
   * In react it is recommended that state be lifted up to the highest component
   * that needs to be aware of it. Thus the board will be keeping track of each
   * tile's state.
   */
  constructor(props) {
    super(props);
    this.state = {board: EMPTY_BOARD};
    props.setGameState(Board.getGameState(this.state.board));
  }

  /*
   * This function is curried, so that this Board can exclusively be aware of
   * the x/y position and the Tile can be responsible for detecting its own click
   */
  clickTile = (x, y) => {
    return () => {
      this.setState((state, props) => {
        var board = state.board;
        board[x][y] = Board.getTileStateChange(board[x][y], this.props.gameState);
        props.setGameState(Board.getGameState(this.state.board));
        return {board: board};
      });
    }
  }

  render() {
    var boardRender = _.map(this.state.board, (column, x) => {
      return _.map(column, (tile, y) => {
        // TODO address keys
        return (
          <Tile contents={tile} onClick={this.clickTile(x, y)}/>
        );
      });
    });
    return(
      <div className="Board u-marginSmall">
        {boardRender}
      </div>
    );
  }
}

Board.propTypes = {
  gameState: PropTypes.any.isRequired,
  setGameState: PropTypes.func.isRequired,
};

export default Board;

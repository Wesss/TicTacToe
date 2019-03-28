import React, { Component } from "react";
import PropTypes from 'prop-types';
import _ from "lodash";
import Game from "./Game.js";
import Tile from "./Tile.js";
import "./Board.css";

class Board extends Component {

  // return the current game state of the given board
  static getGameState(board) {
    var result = false;

    // check for vertical and horizontal wins
    for (var i = 0; i < 3; i++) {
      result = Board.checkForWin(board[i][0], board[i][1], board[i][2]);
      if (result) return result;
      result = Board.checkForWin(board[0][i], board[1][i], board[2][i]);
      if (result) return result;
    }

    // check for diagonal wins
    result = Board.checkForWin(board[0][0], board[1][1], board[2][2]);
    if (result) return result;
    result = Board.checkForWin(board[0][2], board[1][1], board[2][0]);
    if (result) return result;

    // check for tie
    var isTie = true;
    _.forEach(board, (column) => {
      _.forEach(column, (tile) => {
        if (tile === Tile.TILE_STATE.EMPTY) {
          isTie = false;
        }
      });
    });
    if (isTie) {
      return Game.GAME_STATE.TIE;
    }

    // find player turn
    var x_count = 0;
    var o_count = 0;
    _.forEach(board, (column) => {
      _.forEach(column, (tile) => {
        if (tile === Tile.TILE_STATE.X) {
          x_count++;
        } else if (tile === Tile.TILE_STATE.O) {
          o_count++;
        }
      });
    });
    if (x_count > o_count) {
      return Game.GAME_STATE.O_MOVE;
    } else {
      return Game.GAME_STATE.X_MOVE;
    }
  }

  // return a winning game state if three given tiles are identical player markers
  // otherwise return false
  static checkForWin(tile1, tile2, tile3) {
    if (tile1 === Tile.TILE_STATE.X && tile2 === Tile.TILE_STATE.X && tile3 === Tile.TILE_STATE.X) {
      return Game.GAME_STATE.X_WIN;
    } else if (tile1 === Tile.TILE_STATE.O && tile2 === Tile.TILE_STATE.O && tile3 === Tile.TILE_STATE.O) {
      return Game.GAME_STATE.O_WIN;
    } else {
      return false;
    }
  }

  // return the next state of a clicked tile given its current state and the current game state
  static getTileStateChange(curTile, gameState) {
    if (curTile != Tile.TILE_STATE.EMPTY) {
      return curTile;
    }
    switch (gameState) {
      case Game.GAME_STATE.X_MOVE:
        return Tile.TILE_STATE.X;
      case Game.GAME_STATE.O_MOVE:
        return Tile.TILE_STATE.O;
      default:
        return curTile;
    }
  }

  /*
   * While it is more intuitive for each Tile component to be aware of its own state,
   * In react it is recommended that state be lifted up to the highest component
   * that needs to be aware of it. Thus the board will be keeping track of each
   * tile's state.
   */
  constructor(props) {
    super(props);
    this.state = {board: [
      [Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY],
      [Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY],
      [Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY]
    ]};
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
          <Tile contents={tile} onClick={this.clickTile(x, y)} gameState={this.props.gameState}/>
        );
      });
    });
    return(
      <div className="Board u-marginBot">
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

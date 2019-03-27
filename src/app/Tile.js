import React, { Component } from "react";
import PropTypes from 'prop-types';
import _ from "lodash";
import Game from "./Game.js";
import "./Tile.css"

const TILE_STATE = {
  EMPTY: "EMPTY",
  X: "X",
  O: "O"
};

class Tile extends Component {

  static get TILE_STATE() {
    return TILE_STATE;
  }

  render() {
    var className = "Tile";
    if (this.props.contents === TILE_STATE.X) {
      className += " Tile-X";
    } else if (this.props.contents === TILE_STATE.O) {
      className += " Tile-O";
    }

    var containerClassName = "Tile-container"
    if (this.props.gameState === Game.GAME_STATE.X_MOVE) {
      containerClassName += " Tile-X-hover";
    } else if (this.props.gameState === Game.GAME_STATE.O_MOVE) {
      containerClassName += " Tile-O-hover";
    }

    var contents = "";
    if (this.props.contents != TILE_STATE.EMPTY) {
      contents = this.props.contents;
    } else if (this.props.gameState == Game.GAME_STATE.X_MOVE) {
      contents = "X";
    } else if (this.props.gameState == Game.GAME_STATE.O_MOVE) {
      contents = "O";
    }

    return(
      <div className={containerClassName} onClick={this.props.onClick}>
        <div className={className}>
          {contents}
        </div>
      </div>
    );
  }
}

Tile.propTypes = {
  onClick: PropTypes.func,
  contents: PropTypes.oneOf(_.values(TILE_STATE)).isRequired,
  gameState: PropTypes.any.isRequired
};

export default Tile;

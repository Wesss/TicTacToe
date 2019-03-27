import React, { Component } from "react";
import PropTypes from 'prop-types';
import _ from "lodash";
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
    return(
      <div className="Tile-container" onClick={this.props.onClick}>
        <div className="Tile">
          {this.props.contents}
        </div>
      </div>
    );
  }
}

Tile.propTypes = {
  onClick: PropTypes.func,
  contents: PropTypes.oneOf(_.values(TILE_STATE)).isRequired,
};

export default Tile;

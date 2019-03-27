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
      <div className="Tile">
        {this.props.contents}
      </div>
    );
  }
}

Tile.propTypes = {
  contents: PropTypes.oneOf(_.values(TILE_STATE)).isRequired,
};

export default Tile;

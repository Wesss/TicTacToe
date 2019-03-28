import React, { Component } from "react";
import PropTypes from "prop-types";
import Game from "./Game.js"

class Menu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <button className="Button" onClick={this.props.quit}>Quit</button>
    );
  }
}

Menu.propTypes = {
  quit: PropTypes.func.isRequired,
  gameState: PropTypes.any.isRequired
};

export default Menu;

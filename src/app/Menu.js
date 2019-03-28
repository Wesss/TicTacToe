import React, { Component } from "react";
import PropTypes from "prop-types";
import Game from "./Game.js"

class Menu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var quitButtonText = "";
    if (this.props.gameState === Game.GAME_STATE.X_MOVE || this.props.gameState === Game.GAME_STATE.O_MOVE) {
      quitButtonText = "Quit";
    } else {
      quitButtonText = "Restart";
    }
    return(
      <button className="Button" onClick={this.props.quit}>
        {quitButtonText}
      </button>
    );
  }
}

Menu.propTypes = {
  quit: PropTypes.func.isRequired,
  gameState: PropTypes.any.isRequired
};

export default Menu;

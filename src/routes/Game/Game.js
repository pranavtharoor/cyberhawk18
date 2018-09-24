import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Game extends Component {
  static propTypes = {
    initGame: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.initGame();
  }

  render() {
    return <div>Game</div>;
  }
}

export default Game;

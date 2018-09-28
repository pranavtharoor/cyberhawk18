import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Playground from 'Src/modules/Playground';
import Hints from 'Src/modules/Hints';
import Tries from 'Src/modules/Tries';

class Game extends Component {
  static propTypes = {
    initGame: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.initGame();
  }

  render() {
    return (
      <div>
        <Playground />
        <Hints />
        <Tries />
      </div>
    );
  }
}

export default Game;

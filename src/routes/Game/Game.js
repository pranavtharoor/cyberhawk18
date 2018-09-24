import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Playground from 'Src/modules/Playground';

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
      </div>
    );
  }
}

export default Game;

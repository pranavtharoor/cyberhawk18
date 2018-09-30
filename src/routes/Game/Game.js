import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Playground from 'Src/modules/Playground';
import Hints from 'Src/modules/Hints';
import Tries from 'Src/modules/Tries';
import Stats from 'Src/modules/Stats';
import './game.scss';

class Game extends Component {
  static propTypes = {
    initGame: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.initGame();
  }

  render() {
    return (
      <div className="game-page">
        <div>
          <Hints />
          <Tries />
        </div>
        <div>
          <Playground />
        </div>
        <div>
          <Stats />
          <Hints />
        </div>
      </div>
    );
  }
}

export default Game;

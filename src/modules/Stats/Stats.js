import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './stats.scss';

class Stats extends Component {
  static propTypes = {
    getStats: PropTypes.func.isRequired,
    totalPlayers: PropTypes.number,
    leading: PropTypes.number,
    onPar: PropTypes.number,
    trailing: PropTypes.number,
    answerAttempts: PropTypes.number,
    highestLevelBreached: PropTypes.number
  };

  componentDidMount() {
    this.props.getStats();
  }

  render() {
    return (
      <div className="stats-container">
        <div className="heading">Stats</div>
        <div className="stats">
          <div>Total Players: {this.props.totalPlayers}</div>
          <div>Leading: {this.props.leading}</div>
          <div>On Par: {this.props.onPar}</div>
          <div>Trailing: {this.props.trailing}</div>
          <div>Answer Attempts: {this.props.answerAttempts}</div>
          <div>Highest Level Breached: {this.props.highestLevelBreached}</div>
        </div>
      </div>
    );
  }
}

export default Stats;

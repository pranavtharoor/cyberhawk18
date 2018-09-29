import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <div>
        {this.props.totalPlayers}
        {this.props.leading}
        {this.props.onPar}
        {this.props.trailing}
        {this.props.answerAttempts}
        {this.props.highestLevelBreached}
      </div>
    );
  }
}

export default Stats;

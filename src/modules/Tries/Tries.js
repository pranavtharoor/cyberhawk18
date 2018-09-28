import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tries extends Component {
  static propTypes = {
    tries: PropTypes.array.isRequired,
    getTries: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getTries();
  }

  render() {
    return (
      <div>
        {this.props.tries.map((recentTry, i) => (
          <div key={`recentTry_${i}`}>{recentTry}</div>
        ))}
      </div>
    );
  }
}

export default Tries;

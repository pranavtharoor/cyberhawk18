import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './hints.scss';

class Hints extends Component {
  static propTypes = {
    hints: PropTypes.array.isRequired,
    getHints: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getHints();
  }

  render() {
    return (
      <div className="hints-container">
        <div className="heading">Hints</div>
        <div className="hints">
          {this.props.hints.map((hint, i) => (
            <div key={`hint_${i}`}>{hint}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Hints;

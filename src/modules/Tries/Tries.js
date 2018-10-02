import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './tries.scss';

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
      <div className="tries-container">
        <div className="heading">Recent Tries</div>
        <div className="tries">
          {this.props.tries.length > 0 ? (
            this.props.tries.map((recentTry, i) => (
              <div key={`recentTry_${i}`}>{recentTry}</div>
            ))
          ) : (
            <div className="nodata">No tries to show</div>
          )}
        </div>
      </div>
    );
  }
}

export default Tries;

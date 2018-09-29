import React from 'react';
import PropTypes from 'prop-types';

import './hints.scss';

const Hints = props => (
  <div className="hints-container">
    <div className="heading">
      <button onClick={props.getHints}>Hints</button>
    </div>
    <div className="hints">
      {props.hints.map((hint, i) => <div key={`hint_${i}`}>{hint}</div>)}
    </div>
  </div>
);

Hints.propTypes = {
  hints: PropTypes.array.isRequired,
  getHints: PropTypes.func.isRequired
};

export default Hints;

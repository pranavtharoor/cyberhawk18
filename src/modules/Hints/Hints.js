import React from 'react';
import PropTypes from 'prop-types';

const Hints = props => (
  <div>
    <button onClick={props.getHints}>Hints</button>
    {props.hints.map((hint, i) => <div key={`hint_${i}`}>{hint}</div>)}
  </div>
);

Hints.propTypes = {
  hints: PropTypes.array.isRequired,
  getHints: PropTypes.func.isRequired
};

export default Hints;

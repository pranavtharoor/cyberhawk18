import React from 'react';
import PropTypes from 'prop-types';
import './endMessage.scss';

const EndMessage = props => (
  <div className="end-message">
    <div className="heading">CyberHawk</div>
    <button className="close" onClick={props.closeEndMessge}>
      &times;
    </button>
    <div className="message">
      The contest ends on Saturday 6th October 2018 23:59 IST
    </div>
  </div>
);

EndMessage.propTypes = {
  closeEndMessge: PropTypes.func.isRequired
};

export default EndMessage;

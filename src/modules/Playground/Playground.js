import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import './playground.scss';

let Playground = props => (
  <div className="playground">
    <div className="question-container">
      <div className="question">{props.question}</div>
      <div className="add-info">{props.addinfo}</div>
    </div>
    <form className="answer-contianer" onSubmit={props.handleSubmit}>
      <Field
        className="answer-input"
        autoComplete="off"
        autoCapitalize="off"
        name="answer"
        component="input"
        type="text"
        placeholder="Enter answer here..."
      />
    </form>
  </div>
);

Playground.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  addinfo: PropTypes.string.isRequired
};

Playground = reduxForm({
  form: 'playground'
})(Playground);

export default Playground;

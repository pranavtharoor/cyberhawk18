import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

let Playground = props => (
  <div>
    {props.level}
    <br />
    {props.question}
    <br />
    {props.addinfo}
    <br />
    <form onSubmit={props.handleSubmit}>
      <Field
        name="answer"
        component="input"
        type="text"
        placeholder="Enter your answer"
      />
    </form>
  </div>
);

Playground.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  addinfo: PropTypes.string.isRequired
};

Playground = reduxForm({
  form: 'playground'
})(Playground);

export default Playground;

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

let ForgotPasswordForm = props => (
  <form onSubmit={props.handleSubmit}>
    <Field name="email" component="input" type="email" placeholder="Email" />
    <button>Forgot</button>
  </form>
);

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

ForgotPasswordForm = reduxForm({
  form: 'forgotPassword'
})(ForgotPasswordForm);

export default withRouter(ForgotPasswordForm);

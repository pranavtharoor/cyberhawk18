import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

let RegisterForm = props => (
  <form
    onSubmit={props.handleSubmit(data =>
      props.onRegister({ data, push: props.history.push })
    )}
  >
    <Field
      name="username"
      component="input"
      type="text"
      placeholder="Username"
    />
    <Field
      name="password"
      component="input"
      type="password"
      placeholder="Password"
    />
    <Field name="email" component="input" type="email" placeholder="Email" />
    <Field name="tel" component="input" type="number" placeholder="Mobile" />
    <Field name="college" component="input" type="text" placeholder="College" />
    <button>Register</button>
  </form>
);

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

RegisterForm = reduxForm({
  form: 'register'
})(RegisterForm);

export default withRouter(RegisterForm);

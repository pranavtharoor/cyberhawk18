import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

let LoginForm = props => (
  <form
    onSubmit={props.handleSubmit(data =>
      props.onLogin({ data, push: props.history.push })
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
    <button>Login</button>
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default withRouter(LoginForm);

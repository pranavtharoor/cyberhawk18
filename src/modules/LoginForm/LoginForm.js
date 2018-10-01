import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './loginForm.scss';

let LoginForm = props => (
  <div className="login-form">
    <div className="form">
      <form
        onSubmit={props.handleSubmit(data =>
          props.onLogin({ data, push: props.history.push })
        )}
      >
        <Field
          name="username"
          component="input"
          type="text"
          placeholder="USERNAME"
        />
        <br />
        <Field
          name="password"
          component="input"
          type="password"
          placeholder="PASSWORD"
        />
        <br />
        <button>LOGIN</button>
      </form>
    </div>
  </div>
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

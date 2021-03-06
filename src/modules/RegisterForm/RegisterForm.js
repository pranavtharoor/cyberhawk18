import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Captcha from 'Src/modules/Captcha';
import './registerForm.scss';

const registerValidate = values => {
  const errors = {};
  if (!values.username) errors.username = 'Required';
  else if (!/^[a-zA-Z0-9]*$/.test(values.username))
    errors.username = 'Must be alphanumeric. Cannot contain spaces.';
  else if (values.username.length > 30 || values.username.length < 3)
    errors.username = 'Must be 3 - 30 characters long';
  if (!values.email) errors.email = 'Required';
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    errors.email = 'Invalid email address';
  if (!values.password) errors.password = 'Required';
  else if (values.password.length > 30 || values.password.length < 8)
    errors.password = 'Must be 8 - 30 characters long';
  if (!values.name) errors.name = 'Required';
  else if (values.name.length > 30)
    errors.name = 'Must be less than 30 characters long';
  if (!values.tel) errors.tel = 'Required';
  else if (values.tel.includes(' ')) errors.tel = 'Invalid number';
  return errors;
};

let RegisterField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <input {...input} placeholder={label} type={type} />
    <span className="error">{touched && (error && error)}</span>
  </div>
);

RegisterField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string
  })
};

let RegisterForm = props => (
  <div className="register-form">
    <div className="form">
      <form
        onSubmit={props.handleSubmit(data =>
          props.onRegister({ data, push: props.history.push })
        )}
      >
        <Field
          name="username"
          component={RegisterField}
          type="text"
          label="Username"
        />
        <Field
          name="password"
          component={RegisterField}
          type="password"
          label="Password"
        />
        <Field name="name" component={RegisterField} type="text" label="Name" />
        <Field
          name="email"
          component={RegisterField}
          type="email"
          label="Email"
        />
        <Field
          name="tel"
          component={RegisterField}
          type="number"
          label="Mobile"
        />
        <Field
          name="college"
          component={RegisterField}
          type="text"
          label="College"
        />
        <Field name="captcharesponse" component={Captcha} />
        <button>REGISTER</button>
      </form>
    </div>
  </div>
);

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

RegisterForm = reduxForm({
  form: 'register',
  validate: registerValidate
})(RegisterForm);

export default withRouter(RegisterForm);

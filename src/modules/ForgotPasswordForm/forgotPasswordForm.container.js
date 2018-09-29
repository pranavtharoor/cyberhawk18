import { connect } from 'react-redux';
import { action } from 'Src/utils';
import ForgotPasswordForm from './ForgotPasswordForm';

const mapDispatchToProps = dispatch => ({
  onForgotPasswordSubmit: data =>
    dispatch(action('FETCH_FORGOT_PASSWORD_BEGIN', data))
});

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordForm);

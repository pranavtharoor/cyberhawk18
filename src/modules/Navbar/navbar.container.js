import { connect } from 'react-redux';
import { pick } from 'ramda';
import { action } from 'Src/utils';
import Navbar from './Navbar';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(action('FETCH_LOGOUT_BEGIN')),
  setAvatar: avatar => dispatch(action('SET_AVATAR', avatar)),
  openRules: () => dispatch(action('SET_RULES', true))
});

const mapStateToProps = state => ({
  ...pick(['loggedIn'], state.common),
  ...pick(['username'], state.common.gameData),
  ...pick(['avatar'], state.common.gameData),
  ...pick(['level'], state.common.gameData.question)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(Navbar);

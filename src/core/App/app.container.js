import { connect } from 'react-redux';
import { action } from 'Src/utils';
import { pick } from 'ramda';
import App from './App';

const mapDispatchToProps = dispatch => ({
  closeEndMessge: () => dispatch(action('CLOSE_END_MESSAGE'))
});

const mapStateToProps = state => ({
  ...pick(['loggedIn', 'loading', 'rulesOpen'], state.common),
  ...pick(['level'], state.common.gameData.question),
  ...pick(['gameEndMessgeOpen'], state.common)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

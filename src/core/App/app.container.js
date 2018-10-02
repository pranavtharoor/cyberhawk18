import { connect } from 'react-redux';
import { pick } from 'ramda';
import App from './App';

const mapDispatchToProps = () => ({});

const mapStateToProps = state => ({
  ...pick(['loggedIn', 'loading', 'rulesOpen'], state.common),
  ...pick(['level'], state.common.gameData.question)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

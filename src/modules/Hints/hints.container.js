import { connect } from 'react-redux';
import { pick } from 'ramda';
import { action } from 'Src/utils';
import Hints from './Hints';

const mapDispatchToProps = dispatch => ({
  getHints: () => dispatch(action('FETCH_HINTS_BEGIN'))
});

const mapStateToProps = state => ({
  ...pick(['hints'], state.hints)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hints);

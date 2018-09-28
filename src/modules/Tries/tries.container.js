import { connect } from 'react-redux';
import { pick } from 'ramda';
import { action } from 'Src/utils';
import Tries from './Tries';

const mapDispatchToProps = dispatch => ({
  getTries: () => dispatch(action('FETCH_TRIES_BEGIN'))
});

const mapStateToProps = state => ({
  ...pick(['tries'], state.tries)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tries);

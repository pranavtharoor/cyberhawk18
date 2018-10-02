import { connect } from 'react-redux';
import { action } from 'Src/utils';
import Rules from './Rules';

const mapDispatchToProps = dispatch => ({
  closeRules: () => dispatch(action('SET_RULES', false))
});

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rules);

import { connect } from 'react-redux';
import { pick } from 'ramda';
import { action } from 'Src/utils';
import Playground from './Playground';

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(action('FETCH_CHECK_ANSWER_BEGIN', data))
});

const mapStateToProps = state => ({
  ...pick(['question', 'addinfo'], state.common.gameData.question),
  ...pick(['allowAnswerSubmit'], state.playground)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playground);

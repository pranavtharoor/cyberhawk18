import { connect } from 'react-redux';
import { pick } from 'ramda';
import { action } from 'Src/utils';
import Game from './Game';

const mapDispatchToProps = dispatch => ({
  initGame: () => dispatch(action('FETCH_INIT_GAME_BEGIN'))
});

const mapStateToProps = state => ({
  ...pick(['level', 'question', 'addinfo'], state.common.gameData.question)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

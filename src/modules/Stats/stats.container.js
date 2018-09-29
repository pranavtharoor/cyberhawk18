import { connect } from 'react-redux';
import { pick } from 'ramda';
import { action } from 'Src/utils';
import Stats from './Stats';

const mapDispatchToProps = dispatch => ({
  getStats: () => dispatch(action('FETCH_STATS_BEGIN'))
});

const mapStateToProps = state => ({
  ...pick(
    [
      'totalPlayers',
      'leading',
      'onPar',
      'trailing',
      'answerAttempts',
      'highestLevelBreached'
    ],
    state.stats
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats);

import { connect } from 'react-redux';
import { pick } from 'ramda';
import { action } from 'Src/utils';
import Badges from './Badges';

const mapDispatchToProps = dispatch => ({
  getBadges: () => dispatch(action('FETCH_BADGES_BEGIN'))
});

const mapStateToProps = state => ({
  ...pick(['badges'], state.badges)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Badges);

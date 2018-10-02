import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import BeginnersLuck from 'Src/public/BeginnersLuck.png';
// import Conqueror from 'Src/public/Conqueror.png';
import Edison from 'Src/public/Edison.png';
// import Finisher from 'Src/public/Finisher.png';
// import FirstBlood from 'Src/public/FirstBlood.png';
import RightOfPassage from 'Src/public/RiteOfPassage.png';
// import Survivor from 'Src/public/Survivor.png';
import './badges.scss';

class Badges extends Component {
  static propTypes = {
    badges: PropTypes.array.isRequired,
    getBadges: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getBadges();
  }

  render() {
    return (
      <div className="badges-container">
        <div className="heading">Badges</div>
        <div className="badges">
          <div className="flex-container">
            {this.props.badges.map((badge, i) => (
              <div key={`badge_${i}`}>
                <img
                  src={'Right Of Passage' === badge ? RightOfPassage : Edison}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Badges;

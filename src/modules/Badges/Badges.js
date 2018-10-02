import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BeginnersLuck from 'Src/public/BeginnersLuck.png';
import Conqueror from 'Src/public/Conqueror.png';
import Edison from 'Src/public/Edison.png';
import Finisher from 'Src/public/Finisher.png';
import FirstBlood from 'Src/public/FirstBlood.png';
import RightOfPassage from 'Src/public/RiteOfPassage.png';
import Survivor from 'Src/public/Survivor.png';
import Over9000 from 'Src/public/Over9000.png';
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
            {this.props.badges.length > 0 ? (
              this.props.badges.map((badge, i) => (
                <div key={`badge_${i}`}>
                  <img
                    src={
                      'Rite Of Passage' === badge
                        ? RightOfPassage
                        : 'First Blood' === badge
                          ? FirstBlood
                          : 'Over 9000' === badge
                            ? Over9000
                            : 'Edison' === badge
                              ? Edison
                              : "Beginner's Luck" === badge
                                ? BeginnersLuck
                                : 'Survivor' === badge
                                  ? Survivor
                                  : 'Finisher' === badge
                                    ? Finisher
                                    : 'Conqueror' === badge
                                      ? Conqueror
                                      : ''
                    }
                  />
                </div>
              ))
            ) : (
              <div className="nodata">No badges to show</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Badges;

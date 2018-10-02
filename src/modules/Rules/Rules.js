import React from 'react';
import PropTypes from 'prop-types';
import './rules.scss';

const Rules = props => (
  <div className="rules-container">
    <div className="heading">RULES</div>
    <button className="close" onClick={props.closeRules}>
      &times;
    </button>
    <ul>
      <li>
        This is a 4 day game, it starts at 3/10/18 00:00 HRs and ends on 7/10/18
        00:00 HRs
      </li>
      <li>
        Cheaters will be found by our monitoring system and will be ineligible
        for any prizes. Any suspicious behaviour will be reported to us by the
        game.
      </li>
      <li>
        If the answer is &#34;22 Cakes&#34; then the answer you should write is
        &#34;twotwo cakes&#34;. If the answer contains special characters,
        replace them to the nearest character. For example, &#x27;&#x101;&#x27;
        becomes &#x27;a&#x27;. If the answer is &#x27;Steve Jobs&#x27; then the
        answer you should write is &#x27;steven paul job&#x27;.
      </li>
      <li>
        All names, places, organizations, things will be as written on Wikipedia
        with a few exceptions. They will mostly be the full name of the answer.
      </li>
      <li>
        All supporting images shall be linked externally or given to you. You
        will not find anything hidden in the codebase of the game.
      </li>
      <li>
        Top participants will receive e-certificates. Winners will win a cash
        prize and physical certificate. Physical prizes are limited to Manipal
        University students.
      </li>
      <li>
        The CyberHawk organizers have final say and authority for any disputes.
      </li>
      <li>
        All concerns should be raised to &#x27;CyberHawk by IECSE&#x27; page on
        Facebook.
      </li>
    </ul>
  </div>
);

Rules.propTypes = {
  closeRules: PropTypes.func.isRequired
};

export default Rules;

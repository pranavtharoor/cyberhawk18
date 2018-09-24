import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Navbar = props => (
  <div>
    <div className={`nav`}>
      <button onClick={props.logout}>Log Out</button>
    </div>
    <div>
      <div className="greeting">{props.gameData.name.split(' ')[0]}</div>
    </div>
  </div>
);

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  gameData: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
};

export default withRouter(Navbar);

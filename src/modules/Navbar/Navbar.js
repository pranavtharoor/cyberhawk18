import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

const Navbar = props =>
  props.loggedIn ? (
    <div className="navbar loggedin">
      <div className="level">LEVEL {props.level}</div>
      <div className="avatar">
        <div className="dropdown-container">
          <div className="dropdown">
            <div className="name">{props.username}</div>
            <button className="logout" onClick={props.logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="navbar loggedout">
      <NavLink exact={true} to="/login" activeClassName="active">
        Login
      </NavLink>
      <NavLink exact={true} to="/register" activeClassName="active">
        Register
      </NavLink>
    </div>
  );

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired
};

export default Navbar;

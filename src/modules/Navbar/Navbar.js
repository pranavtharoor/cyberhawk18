import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

const Navbar = props =>
  props.loggedIn ? (
    <div className="navbar loggedin">
      <div className="level">Level {props.level}</div>
      <div className="name">{props.name.split(' ')[0]}</div>
      <button className="logout" onClick={props.logout}>
        Logout
      </button>
    </div>
  ) : (
    <div className="navbar loggedout">
      <NavLink to="/login" activeClassName="active">
        Login
      </NavLink>
      <NavLink to="/register" activeClassName="active">
        Register
      </NavLink>
    </div>
  );

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired
};

export default Navbar;

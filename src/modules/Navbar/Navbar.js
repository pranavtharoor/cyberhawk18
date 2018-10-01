import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

class Navbar extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    level: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    setAvatar: PropTypes.func.isRequired
  };

  state = {
    avatarPickerOpen: false
  };

  render() {
    return this.props.loggedIn ? (
      <div className="navbar loggedin">
        <div className="level">LEVEL {this.props.level}</div>
        <div
          className={`avatar ${this.props.avatar}`}
          style={{
            backgroundImage:
              this.props.avatar === 'hawk'
                ? `url('https://cyberhawk.iecsemanipal.com/assets/hawk.png')`
                : `url('https://avatars.dicebear.com/v2/${this.props.avatar}/${
                    this.props.username
                  }.svg')`
          }}
        >
          <div className="dropdown-container">
            <div className="dropdown">
              <div className="menu">
                <div
                  className="name"
                  onClick={() =>
                    this.setState({
                      avatarPickerOpen: !this.state.avatarPickerOpen
                    })
                  }
                >
                  {this.props.username}
                </div>
                <button className="logout" onClick={this.props.logout}>
                  Logout
                </button>
              </div>
              <div
                className={`avatar-picker ${this.state.avatarPickerOpen &&
                  'open'}`}
              >
                <div
                  onClick={() =>
                    this.props.setAvatar(
                      this.props.avatar === 'female' ? 'identicon' : 'female'
                    )
                  }
                  style={{
                    backgroundImage: `url('https://avatars.dicebear.com/v2/${
                      this.props.avatar === 'female' ? 'identicon' : 'female'
                    }/${this.props.username}.svg')`
                  }}
                />
                <div
                  onClick={() =>
                    this.props.setAvatar(
                      this.props.avatar === 'male' ? 'identicon' : 'male'
                    )
                  }
                  style={{
                    backgroundImage: `url('https://avatars.dicebear.com/v2/${
                      this.props.avatar === 'male' ? 'identicon' : 'male'
                    }/${this.props.username}.svg')`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="navbar loggedout">
        <NavLink exact={true} to="/login" activeClassName="active">
          LOGIN
        </NavLink>
        <NavLink exact={true} to="/register" activeClassName="active">
          REGISTER
        </NavLink>
      </div>
    );
  }
}

export default Navbar;

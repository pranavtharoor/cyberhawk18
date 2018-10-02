import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Favicon from 'react-favicon';
import PropTypes from 'prop-types';
import './app.scss';
import routes from 'Src/routes';
import Navbar from 'Src/modules/Navbar';
import Snackbar from 'Src/modules/Snackbar';
import Loader from 'Src/modules/Loader';
import BG1 from 'Src/public/BG1.png';
import BG2 from 'Src/public/BG2.png';
import BG3 from 'Src/public/BG3.png';
import BG1m from 'Src/public/BG1m.png';
import BG2m from 'Src/public/BG2m.png';
import BG3m from 'Src/public/BG3m.png';

const App = props => (
  <div>
    {props.loading && <Loader />}
    <Favicon url="https://cyberhawk.iecsemanipal.com/hawk.png" />
    <Router>
      <div
        className={`app-container`}
        style={{
          ...(props.loggedIn && {
            backgroundImage: `url(${
              window.innerWidth > 600
                ? props.level % 15 < 5
                  ? BG1
                  : props.level % 15 < 10
                    ? BG2
                    : BG3
                : props.level % 15 < 5
                  ? BG1m
                  : props.level % 15 < 10
                    ? BG2m
                    : BG3m
            })`
          })
        }}
      >
        <Navbar />
        {!props.loggedIn && <div className="hr" />}
        <Switch>
          {routes.map(route => (
            <Route
              exact
              key={route.pathname}
              path={route.pathname}
              component={route.component}
            />
          ))}
        </Switch>
        <Snackbar />
      </div>
    </Router>
  </div>
);

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  level: PropTypes.number.isRequired
};

export default App;

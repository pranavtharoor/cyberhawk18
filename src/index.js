import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'Src/core/App';
import { Provider } from 'react-redux';
import store from 'Src/store';
import { registerSW } from 'Src/utils';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

registerSW();

ReactDOM.render(<Root />, document.getElementById('root'));

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'Src/core/App';
import { Provider } from 'react-redux';
import store from 'Src/store';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register(`/sw.js`)
//     .then(() => {
//       if (
//         'Notification' in window &&
//         Notification.permission !== 'granted' &&
//         Notification.permission !== 'denied'
//       )
//         Notification.requestPermission();
//     })
//     .catch(err => console.error('Service worker registration failed', err));
// } else console.error('Service Worker API is not supported in current browser');

ReactDOM.render(<Root />, document.getElementById('root'));

import firebase from 'firebase';
import config from 'Config/firebase';

export default () => {
  firebase.initializeApp(config);
  const messaging = firebase.messaging();
  messaging
    .requestPermission()
    .then(() => {
      console.log('Have Permission');
      return messaging.getToken();
    })
    .then(token => {
      console.log('FCM Token:', token);
      //you probably want to send your new found FCM token to the
      //application server so that they can send any push
      //notification to you.
    })
    .catch(error => {
      if (error.code === 'messaging/permission-blocked') {
        console.log('Please Unblock Notification Request Manually');
      } else {
        console.log('Error Occurred', error);
      }
    });
};

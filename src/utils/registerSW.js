import firebase from 'firebase/app';
import 'firebase/messaging';
import config from 'Config/firebase';

export default async () => {
  firebase.initializeApp(config);
  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.register('/sw.js');
    const messaging = await firebase.messaging();
    await messaging.useServiceWorker(registration);
  }
};

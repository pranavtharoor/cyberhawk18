import firebase from 'firebase/app';
import 'firebase/messaging';
import { request } from 'Src/utils';

export default async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    const data = await request('/subscribeUser', { token });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

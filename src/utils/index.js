import actionUtil from './action';
import reducerUtil from './reducer';
import requestUtil from './request';
import datetimeUtil from './datetime';
import setCookieUtil from './setCookie';
import getCookieUtil from './getCookie';
import registerSWUtil from './registerSW';
import requestPushNotificationsUtil from './requestPushNotifications';

export const action = actionUtil;
export const reducer = reducerUtil;
export const request = requestUtil;
export const datetime = datetimeUtil;
export const setCookie = setCookieUtil;
export const getCookie = getCookieUtil;
export const registerSW = registerSWUtil;
export const requestPushNotifications = requestPushNotificationsUtil;

export default {
  actionUtil,
  reducerUtil,
  requestUtil,
  datetime,
  setCookie,
  registerSW,
  requestPushNotifications
};

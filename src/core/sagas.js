import { all, put } from 'redux-saga/effects';
import { navbarSaga } from 'Src/modules/Navbar';
import { loginFormSaga } from 'Src/modules/LoginForm';
import { registerFormSaga } from 'Src/modules/RegisterForm';
import { forgotPasswordFormSaga } from 'Src/modules/ForgotPasswordForm';
import { setPasswordFormSaga } from 'Src/modules/SetPasswordForm';
import { playgroundSaga } from 'Src/modules/Playground';
import { hintsSaga } from 'Src/modules/Hints';
import { badgesSaga } from 'Src/modules/Badges';
import { triesSaga } from 'Src/modules/Tries';
import { statsSaga } from 'Src/modules/Stats';
import { gameSaga } from 'Src/routes/Game';
import { action } from 'Src/utils';

function* init() {
  process.env.NODE_ENV === 'development' &&
    console.log('🍪🍪🍪 cookies:', document.cookie || 'none');
  if (document.cookie.includes('session'))
    yield put(action('SET_LOGGED_IN', true));
  if (
    localStorage.getItem('avatar') === 'male' ||
    localStorage.getItem('avatar') === 'female' ||
    localStorage.getItem('avatar') === 'hawk'
  ) {
    yield put(action('SET_AVATAR', localStorage.getItem('avatar')));
  }
  yield put(action('SET_LOADING', false));
}

export function* rootSaga() {
  yield all([
    init(),
    navbarSaga(),
    loginFormSaga(),
    registerFormSaga(),
    forgotPasswordFormSaga(),
    setPasswordFormSaga(),
    gameSaga(),
    statsSaga(),
    playgroundSaga(),
    hintsSaga(),
    badgesSaga(),
    triesSaga()
  ]);
}

export default rootSaga;

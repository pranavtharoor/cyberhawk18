import { all, put } from 'redux-saga/effects';
import { navbarSaga } from 'Src/modules/Navbar';
import { loginFormSaga } from 'Src/modules/LoginForm';
import { registerFormSaga } from 'Src/modules/RegisterForm';
import { playgroundSaga } from 'Src/modules/Playground';
import { gameSaga } from 'Src/routes/Game';
import { action } from 'Src/utils';

function* init() {
  process.env.NODE_ENV === 'development' &&
    console.log('🍪🍪🍪 cookies:', document.cookie || 'none');
  if (document.cookie.includes('session'))
    yield put(action('SET_LOGGED_IN', true));
  yield put(action('SET_LOADING', false));
}

export function* rootSaga() {
  yield all([
    init(),
    navbarSaga(),
    loginFormSaga(),
    registerFormSaga(),
    gameSaga(),
    playgroundSaga()
  ]);
}

export default rootSaga;

import { all, put } from 'redux-saga/effects';
import { navbarSaga } from 'Src/modules/Navbar';
import { loginFormSaga } from 'Src/modules/LoginForm';
import { action } from 'Src/utils';
import gameSaga from 'Src/routes/Game/game.sagas';

function* init() {
  process.env.NODE_ENV === 'development' &&
    console.log('🍪🍪🍪 cookies:', document.cookie || 'none');
  if (document.cookie.includes('session'))
    yield put(action('SET_LOGGED_IN', true));
  yield put(action('SET_LOADING', false));
}

export function* rootSaga() {
  yield all([init(), navbarSaga(), loginFormSaga(), gameSaga()]);
}

export default rootSaga;

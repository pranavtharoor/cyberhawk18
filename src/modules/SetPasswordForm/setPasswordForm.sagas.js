import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { request, action } from 'Src/utils';

function* setPassword({ payload }) {
  if (!payload.data.password || !payload.data.token)
    yield put(
      action('SET_SNACKBAR', { type: 'danger', message: 'Fill all fields' })
    );
  else {
    const data = yield call(request, '/setPassword', payload.data);
    if (data.success) {
      yield put(action('SET_SNACKBAR', { type: 'success', message: data.msg }));
      yield payload.push('/login');
    } else
      yield put(action('SET_SNACKBAR', { type: 'danger', message: data.msg }));
  }
  yield delay(3000);
  yield put(action('CLEAR_SNACKBAR'));
}

function* setPasswordFormSaga() {
  yield takeLatest('FETCH_SET_PASSWORD_BEGIN', setPassword);
}

export default setPasswordFormSaga;

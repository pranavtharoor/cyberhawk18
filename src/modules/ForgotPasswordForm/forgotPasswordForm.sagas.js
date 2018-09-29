import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { request, action } from 'Src/utils';

function* forgotPasswordSubmit({ payload }) {
  const data = yield call(request, '/forgotPassword', payload.data);
  if (data.success) {
    yield put(action('SET_SNACKBAR', { type: 'success', message: data.msg }));
    yield put(action('FETCH_FORGOT_PASSWORD_SUCCESS'));
  } else
    yield put(action('SET_SNACKBAR', { type: 'danger', message: data.msg }));
  yield delay(3000);
  yield put(action('CLEAR_SNACKBAR'));
}

function* forgotPasswordFormSaga() {
  yield takeLatest('FETCH_FORGOT_PASSWORD_BEGIN', forgotPasswordSubmit);
}

export default forgotPasswordFormSaga;

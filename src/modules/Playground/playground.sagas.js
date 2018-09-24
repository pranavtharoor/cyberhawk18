import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { request, action } from 'Src/utils';

function* checkAnswer({ payload }) {
  const data = yield call(request, '/checkans', payload);
  if (data.success) {
    yield put(
      action('SET_SNACKBAR', {
        type: data.data === 1 ? 'success' : data.data === 2 ? 'info' : 'danger',
        message: data.msg
      })
    );
    if (data.data === 1) yield put(action('FETCH_INIT_GAME_BEGIN'));
  } else
    yield put(action('SET_SNACKBAR', { type: 'danger', message: data.msg }));
  yield delay(3000);
  yield put(action('CLEAR_SNACKBAR'));
}

function* playgroundSaga() {
  yield takeLatest('FETCH_CHECK_ANSWER_BEGIN', checkAnswer);
}

export default playgroundSaga;

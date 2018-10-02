import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { request, action } from 'Src/utils';
import { reset } from 'redux-form';

function* checkAnswer({ payload }) {
  if (!payload.answer) return;
  yield put(reset('playground'));
  const data = yield call(request, '/checkans', payload);
  if (data.success) {
    yield put(
      action('SET_SNACKBAR', {
        type: data.data === 1 ? 'success' : data.data === 2 ? 'info' : 'danger',
        message: data.msg
      })
    );
    if (data.data === 1) {
      yield put(action('FETCH_INIT_GAME_BEGIN'));
      yield put(action('CLEAR_HINTS'));
      yield put(action('CLEAR_TRIES'));
      yield put(action('FETCH_STATS_BEGIN'));
      yield put(action('FETCH_HINTS_BEGIN'));
      yield put(action('FETCH_BADGES_BEGIN'));
    } else yield put(action('ADD_TRY', payload.answer));
  } else {
    yield put(action('SET_SNACKBAR', { type: 'danger', message: data.msg }));
    if (data.data !== 1) yield put(action('ADD_TRY', payload.answer));
  }
  yield delay(3000);
  yield put(action('CLEAR_SNACKBAR'));
}

function* playgroundSaga() {
  yield takeLatest('FETCH_CHECK_ANSWER_BEGIN', checkAnswer);
}

export default playgroundSaga;

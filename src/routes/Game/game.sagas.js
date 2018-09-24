import { call, put, takeLatest } from 'redux-saga/effects';
import { request, action } from 'Src/utils';

function* initGame() {
  const data = yield call(request, '/initgame');
  if (data.success) yield put(action('FETCH_INIT_GAME_SUCCESS', data.data));
}

function* gameSaga() {
  yield takeLatest('FETCH_INIT_GAME_BEGIN', initGame);
}

export default gameSaga;

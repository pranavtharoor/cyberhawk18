import { call, put, takeLatest } from 'redux-saga/effects';
import { request, action } from 'Src/utils';

function* getTries() {
  const data = yield call(request, '/getTries');
  if (data.success) yield put(action('FETCH_TRIES_SUCCESS', data.data || []));
}

function* triesSaga() {
  yield takeLatest('FETCH_TRIES_BEGIN', getTries);
}

export default triesSaga;

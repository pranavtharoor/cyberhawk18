import { call, put, takeLatest } from 'redux-saga/effects';
import { request, action } from 'Src/utils';

function* getStats() {
  const data = yield call(request, '/getStats');
  if (data.success) yield put(action('FETCH_STATS_SUCCESS', data.data || []));
}

function* StatsSaga() {
  yield takeLatest('FETCH_STATS_BEGIN', getStats);
}

export default StatsSaga;

import { call, put, takeLatest } from 'redux-saga/effects';
import { request, action } from 'Src/utils';

function* getHints() {
  const data = yield call(request, '/getHints');
  if (data.success) yield put(action('FETCH_HINTS_SUCCESS', data.data || []));
}

function* hintsSaga() {
  yield takeLatest('FETCH_HINTS_BEGIN', getHints);
}

export default hintsSaga;

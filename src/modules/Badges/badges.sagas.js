import { call, put, takeLatest } from 'redux-saga/effects';
import { request, action } from 'Src/utils';

function* getBadges() {
  const data = yield call(request, '/getBadges');
  if (data.success) yield put(action('FETCH_BADGES_SUCCESS', data.data || []));
}

function* BadgesSaga() {
  yield takeLatest('FETCH_BADGES_BEGIN', getBadges);
}

export default BadgesSaga;

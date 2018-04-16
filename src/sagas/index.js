import { all } from 'redux-saga/effects';

import user from './user';

export default function* IndexSaga() {
  yield all([
    user(),
  ]);
}


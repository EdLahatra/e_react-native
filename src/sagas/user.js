import { take, fork, call, put } from 'redux-saga/effects';
import * as api from '../api/user';
import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_ERROR } from '../constants/user';

/* function* logout() {
  yield put(unsetClient());
} */

function* loginFlow(data) {
  try {
    const result = yield call(api.loginApi, data);
    yield put({ type: LOGIN_SUCCESS, result });
  } catch (error) {
    yield put({ type: LOGIN_ERROR, error });
  }
}
function* loginWatcher() {
  while (true) {
    const { data } = yield take(LOGIN_REQUESTING);
    yield fork(loginFlow, data);
  }
}

export default loginWatcher;

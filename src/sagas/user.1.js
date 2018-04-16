import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as api from '../api/user';
import { USER_LOGIN, USER_LOGOUT } from '../constants/user';
import { loginSucces, logout } from '../actions/user';

function* userLogout() {
  try {
    yield put(logout());
  } catch (error) {
    yield put(logout());
  }
}

function* userLogin(action) {
  try {
    const { currentUser } = action;
    const result = yield call(api.login, currentUser);
    yield put(loginSucces(result));
  } catch (error) {
    yield put(logout());
  }
}

function* user() {
  yield all([
    takeLatest(USER_LOGIN, userLogin),
    takeLatest(USER_LOGOUT, userLogout),
  ]);
}

export default user;

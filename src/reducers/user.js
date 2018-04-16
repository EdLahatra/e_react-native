import {
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../constants/user';

const defaultState = {
  connected: false,
  access_token: '',
  user: {},
  requesting: false,
  errors: [],
};

const user = (state = defaultState, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      if (action.payload && action.payload.user) {
        return action.payload.user;
      }
      return state;
    case LOGIN_REQUESTING:
      return {
        ...state,
        requesting: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        connected: true,
        user: action.result,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        errors: [{ eror: 'login' }],
        requesting: false,
      };
    default:
      return state;
  }
};

export default user;

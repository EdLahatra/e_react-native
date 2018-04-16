import { LOGIN_REQUESTING } from '../constants/user';

const loginRequest = data => ({
  type: LOGIN_REQUESTING,
  data,
});

export default loginRequest;

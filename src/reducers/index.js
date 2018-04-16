// import { combineReducers } from 'redux';
import user from './user';
import nav from './navigation';

/* const app = combineReducers({
  log: (_, action) => {
    // eslint-disable-next-line no-console
    console.log(action);
    return {};
  },
  user,
  nav,
}); */
const app = {
  user,
  nav,
};

export default app;

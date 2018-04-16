import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import appReducer from './reducers';
import appSaga from './sagas';

const config = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: ['nav'], // don't persist nav for now
};

const reducer = persistCombineReducers(config, appReducer);

const logger = createLogger({
  collapsed: true,
  duration: true,
});

const sagaMiddleware = createSagaMiddleware();

/* const store = createStore(
  appReducer,
  applyMiddleware(logger, sagaMiddleware),
); */

const store = createStore(
  reducer,
  {}, // initial state
  applyMiddleware(logger, sagaMiddleware),
);

sagaMiddleware.run(appSaga);

export const persistor = persistStore(store);

export default store;

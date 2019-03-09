import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';

export default function configureStore(preloadedState = {}) {
  const middlewares = [];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger());
  }
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );

  return store;
}

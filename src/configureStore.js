import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import rootReducer from './rootReducer';

export default function configureStore(preloadedState = {}) {
  const middlewares = [promise];

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

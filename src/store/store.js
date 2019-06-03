import { Iterable, Map } from 'immutable';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router/immutable';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const stateTransformer = state => {
  if (Iterable.isIterable(state)) return state.toJS();
  return state;
};

const logger = createLogger({
  stateTransformer
});

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer(history),
  Map(),
  compose(applyMiddleware(routerMiddleware(history), sagaMiddleware, logger))
);

sagaMiddleware.run(rootSaga);

export default store;

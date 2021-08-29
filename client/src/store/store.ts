import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { teamsTableReducer } from './reducers/teamsTableReducer';
import { rootWatchers } from './sagas/rootWatchers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  teams: teamsTableReducer
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootWatchers);



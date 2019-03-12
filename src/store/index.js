import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middlewares = window.__REDUX_DEVTOOLS_EXTENSION__ ? 
  compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__()) : 
  applyMiddleware(thunk);

export const store = createStore(rootReducer, middlewares);

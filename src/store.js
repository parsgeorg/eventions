import { applyMiddleware, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';
import createHistory from 'history/createBrowserHistory';
import logger from './middlewares/logger';

export const history = createHistory();

const middleware = [thunk, logger, routerMiddleware(history)];

export default createStore(
  connectRouter(history)(reducers),
  composeWithDevTools(applyMiddleware(...middleware)),
);

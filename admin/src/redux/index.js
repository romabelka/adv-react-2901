import { createStore, applyMiddleware } from 'redux'
import {routerMiddleware} from 'connected-react-router'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from './reducer'
import history from '../history'
import { verifyAuth } from "../ducks/auth";

const { NODE_ENV } = process.env;
const enhancer = applyMiddleware(thunk, routerMiddleware(history), logger)
const store = (NODE_ENV === 'development')
    ? createStore(reducer, composeWithDevTools(enhancer))
    : createStore(reducer, enhancer)

store.dispatch(verifyAuth())

export default store

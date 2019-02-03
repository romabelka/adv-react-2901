import { createStore, applyMiddleware } from 'redux'
import {routerMiddleware} from 'connected-react-router'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducer'
import history from '../history'
import { initAuth } from '../ducks/auth'

const enhancer = applyMiddleware(thunk, routerMiddleware(history), logger)

const store = createStore(reducer, enhancer)
store.dispatch(initAuth());

export default store

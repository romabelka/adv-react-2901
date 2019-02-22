import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'
import reducer from './reducer'
import history from '../history'

const sagaMiddleware = createSagaMiddleware()

const enhancer = applyMiddleware(
  thunk,
  sagaMiddleware,
  routerMiddleware(history),
  logger
)

const store = createStore(reducer, enhancer)

//sagaMiddleware.run(authSaga)
//sagaMiddleware.run(peopleSaga)
sagaMiddleware.run(saga)

//dev only
window.store = store

export default store

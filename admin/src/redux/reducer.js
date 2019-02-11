import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as form } from 'redux-form'
import authReducer from '../ducks/auth'
import eventsReducer from '../ducks/events'
import people from '../ducks/people'
import history from '../history'

export default combineReducers({
  people,
  auth: authReducer,
  router: connectRouter(history),
  events: eventsReducer,
  form
})

import { combineReducers } from 'redux'
import {connectRouter} from 'connected-react-router'
import {reducer as form} from 'redux-form'
import authReducer from '../ducks/auth'
import personsReducer from '../ducks/persons'
import history from '../history'

export default combineReducers({
    auth: authReducer,
    persons: personsReducer,
    router: connectRouter(history),
    form
})

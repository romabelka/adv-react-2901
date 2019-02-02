import { combineReducers } from 'redux'
import {connectRouter} from 'connected-react-router'
import {reducer as form} from 'redux-form'
import authReducer from '../ducks/auth'
import personReducer from '../ducks/person';
import history from '../history'

export default combineReducers({
    auth: authReducer,
    person: personReducer,
    router: connectRouter(history),
    form
})

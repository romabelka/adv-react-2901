import { combineReducers } from 'redux'
import {connectRouter} from 'connected-react-router'
import {reducer as form} from 'redux-form'
import authReducer from '../ducks/auth'
import participantsReducer from '../ducks/participants'
import history from '../history'

export default combineReducers({
    auth: authReducer,
    router: connectRouter(history),
    participants: participantsReducer,
    form
})

import { combineReducers } from 'redux'
import {connectRouter} from 'connected-react-router'
import {reducer as form} from 'redux-form'
import authReducer from '../ducks/auth'
import peoples from '../ducks/peoples'
import history from '../history'

export default combineReducers({
    auth: authReducer,
    router: connectRouter(history),
    form,
    peoples,
})

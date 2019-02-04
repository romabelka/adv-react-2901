import { Record, OrderedMap } from 'immutable'
import { reset } from 'redux-form'
import { appName } from '../config'


export const moduleName = 'users'
const prefix = `${appName}/${moduleName}`
export const CREATE_USER_SUCCESS = `${prefix}/CREATE_USER_SUCCESS`

const ReducerRecord = Record({
    users: new OrderedMap({})
})

const UserRecord = Record({
    id: '',
    name: '',
    other: ''
})

export default function userReducer(state = new ReducerRecord(), action) {
    const {type, payload} = action
    switch (type) {
        case CREATE_USER_SUCCESS:
            console.log('payload = =', payload)
            return state.setIn(['users', payload.id], new UserRecord(payload))
        default:
            return state
    }
}

export function createUser({name, other}) {
    return async dispatch => {
        dispatch({
            type: CREATE_USER_SUCCESS,
            payload: {
                id: new Date().getTime(),
                name,
                other,
            }
        })
        dispatch(reset('user-list-form'))
    }
}
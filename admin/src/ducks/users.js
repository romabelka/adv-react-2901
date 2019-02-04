import _ from 'lodash'
import { Record, OrderedMap } from 'immutable'
import { createSelector } from 'reselect'
import { reset } from 'redux-form'
import { appName } from '../config'

/**
 * Constants
 **/

export const moduleName = 'users'
const prefix = `${appName}/${moduleName}`

export const CREATE_USER_SUCCESS = `${prefix}/ADD_USER_SUCCESS`

/**
 * Reducer
 **/

const ReducerRecord = Record({
  items: new OrderedMap({})
})

const UserRecord = Record({
  id: null,
  email: null,
  firstName: null,
  lastName: null
})

export default function reducer(state = new ReducerRecord(), action) {
  const { type, payload } = action

  switch (type) {
    case CREATE_USER_SUCCESS:
      return state.setIn(['items', payload.id], new UserRecord(payload))
    default:
      return state
  }
}

/**
 * Selectors
 **/

export const rootSelector = ({ users }) => users
export const usersSelector = createSelector(
  rootSelector,
  ({ items }) => [...items.values()]
)

/**
 * Action Creators
 **/

export function createUser({ email, firstName, lastName }) {
  return dispatch => {
    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: {
        id: _.uniqueId(),
        email,
        firstName,
        lastName
      }
    })
    dispatch(reset('user-form'))
  }
}

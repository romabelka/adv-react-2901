import { appName } from '../config'
import { Record, List } from 'immutable'
import { reset } from 'redux-form'
import { createSelector } from 'reselect'
import { take, put } from 'redux-saga/effects'

/**
 * Constants
 * */
export const moduleName = 'people'
const prefix = `${appName}/${moduleName}`
export const ADD_PERSON = `${prefix}/ADD_PERSON`
export const ADD_PERSON_REQUEST = `${prefix}/ADD_PERSON_REQUEST`

/**
 * Reducer
 * */
const ReducerState = Record({
  entities: new List([])
})

const PersonRecord = Record({
  id: null,
  firstName: null,
  lastName: null,
  email: null
})

export default function reducer(state = new ReducerState(), action) {
  const { type, payload } = action

  switch (type) {
    case ADD_PERSON:
      return state.update('entities', (entities) =>
        entities.push(new PersonRecord(payload.person))
      )

    default:
      return state
  }
}
/**
 * Selectors
 * */

export const stateSelector = (state) => state[moduleName]
export const peopleSelector = createSelector(
  stateSelector,
  (state) => state.entities.valueSeq().toArray()
)

/**
 * Action Creators
 * */

export function addPerson(person) {
  return {
    type: ADD_PERSON_REQUEST,
    payload: person
  }
}

/*
export function addPerson(person) {
  return (dispatch) => {
    dispatch({
      type: ADD_PERSON,
      payload: {
        person: { id: Date.now(), ...person }
      }
    })

    dispatch(reset('person'))
  }
}
*/

/**
 *  Sagas
 */

export function* saga() {
  while (true) {
    const action = yield take(ADD_PERSON_REQUEST)
    const person = { ...action.payload, id: Date.now() }

    yield put({
      type: ADD_PERSON,
      payload: { person }
    })

    yield put(reset('person'))
  }
}

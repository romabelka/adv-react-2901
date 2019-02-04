import { Record, OrderedMap } from 'immutable'
import { appName } from '../config'
import { createSelector } from 'reselect'
import {reset} from 'redux-form'

/**
 * Constants
 * */
export const moduleName = 'auth'
const prefix = `${appName}/${moduleName}`

export const ADD_PERSON = `${prefix}/ADD_PERSON`

/**
 * Reducer
 * */
export const PersonRecord = Record({
  id: null,
  firstName: null,
  lastName: null,
  email: null
})


const ReducerRecord = Record({
  entities: new OrderedMap({}),
})

export default function reducer(state = new ReducerRecord(), action) {
  const { type, payload } = action

  switch (type) {
    case ADD_PERSON:
    return state.setIn(
      ['entities', randomId],
      new PersonRecord({
        ...payload.person,
        id: randomId
      })
    )
    default:
      return state
  }
}

/**
 * Selectors
 * */

const peopleMapSelector = (state) => state.people.entities

export const peopleListSelector = createSelector(
  peopleMapSelector,
  (peopleMap) => peopleMap.valueSeq().toArray()
);

/**
 * Action Creators
 * */

export const addPerson = (person) => (dispatch) => {
  dispatch({
    type: ADD_PERSON,
    payload: { person }
  })
  dispatch(reset('add-person'))
}

function randomId() {
  return (Date.now() + Math.random()).toString()
}

import { appName } from '../config'
import { Record, List } from 'immutable'
import { reset } from 'redux-form'
import { createSelector } from 'reselect'
import { takeEvery, put, call } from 'redux-saga/effects'
import api from '../services/api'
import { fbToEntities } from '../services/util'

/**
 * Constants
 * */
export const moduleName = 'people'
const prefix = `${appName}/${moduleName}`
export const ADD_PERSON = `${prefix}/ADD_PERSON`
export const ADD_PERSON_REQUEST = `${prefix}/ADD_PERSON_REQUEST`
export const FETCH_PEOPLE_REQUEST = `${prefix}/FETCH_PEOPLE_REQUEST`
export const FETCH_PEOPLE_SUCCESS = `${prefix}/FETCH_PEOPLE_SUCCESS`

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
        entities.push(new PersonRecord(payload))
      )
    case FETCH_PEOPLE_SUCCESS:
      return state.set('entities', fbToEntities(payload, PersonRecord))
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

const idSelector = (_, { id }) => id
export const personSelector = createSelector(
  stateSelector,
  idSelector,
  (state, id) => state.entities.find((person) => person.id === id)
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

export function fetchPeople() {
  return {
    type: FETCH_PEOPLE_REQUEST
  }
}

/**
 *  Sagas
 */

export function* addPersonSaga({ payload: person }) {
  const { id } = yield call(api.createPerson, person)

  yield put({
    type: ADD_PERSON,
    payload: { ...person, id }
  })

  yield put(reset('person'))
}

export function* fetchPeopleSaga() {
  const people = yield call(api.fetchPeople)

  yield put({
    type: FETCH_PEOPLE_SUCCESS,
    payload: people
  })
}

export function* saga() {
  yield takeEvery(ADD_PERSON_REQUEST, addPersonSaga)
  yield takeEvery(FETCH_PEOPLE_REQUEST, fetchPeopleSaga)
}

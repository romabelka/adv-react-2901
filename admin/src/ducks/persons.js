import { Record, OrderedMap } from 'immutable'
import { reset } from 'redux-form'
import { createSelector } from 'reselect';

import { ID } from "../utils";
import { appName } from '../config'

/**
 * Constants
 * */
export const moduleName = 'person';
const prefix = `${appName}/${moduleName}`;

export const ADD_PERSON_SUCCESS = `${prefix}/ADD_PERSON_SUCCESS`;

/**
 * Reducer
 * */
export const ReducerRecord = Record({
  list: new OrderedMap({})
});

const PersonRecord = Record({
  id: null,
  email: null,
  firstName: null,
  lastName: null,
});

export default function reducer(state = new ReducerRecord(), action) {
  const {type, payload} = action;

  switch (type) {
    case ADD_PERSON_SUCCESS:
      return state.setIn(
        ['list', payload.id],
        new PersonRecord(payload)
      );
    default:
      return state
  }
}

/**
 * Selectors
 * */

const personsReducer = store => store.persons;

export const getPersons = createSelector(
  personsReducer,
  i => i.list.valueSeq().toArray()
);

/**
 * Action Creators
 * */

export function addPerson(person) {
  return dispatch => {
    dispatch({
      type: ADD_PERSON_SUCCESS,
      payload: {
        id: ID(),
        ...person,
      },
    });
    dispatch(reset('add-persons'))
  }
}

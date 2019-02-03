import { Record } from 'immutable';
import { createSelector } from 'reselect'
import { appName } from '../config';
import { arrToMap } from './utils';

/**
 * Constants
 * */
export const moduleName = 'peoples';
const prefix = `${appName}/${moduleName}`;

export const ADD_PEOPLE = `${prefix}/ADD_PEOPLE`;

/**
 * Reducer
 * */
export const PeopleRecord = Record({
  id: null,
  fname: null,
  lname: null,
  email: null,
});

export const PeopleListRecord = Record({
  peopleList: arrToMap([], PeopleRecord),
});

export default function reducer(state = new PeopleListRecord(), action) {
  const {type, payload} = action

  switch (type) {
    case ADD_PEOPLE:
      return state.setIn(['peopleList', payload.id], new PeopleRecord(payload))
    default:
      return state
  }
}

/**
 * Selectors
 * */


/**
 * Action Creators
 * */
export function addPeople(fname, lname, email) {
  return (dispatch) => {
    dispatch({
      type: ADD_PEOPLE,
      payload: { id: Date.now(), fname, lname, email },
    })
  }
}

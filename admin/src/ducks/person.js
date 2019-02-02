import { Record, OrderedMap } from 'immutable'
import { reset } from 'redux-form'

import {appName} from '../config'

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

export default function reducer(state = new ReducerRecord(), action) {
  const {type, payload} = action;

  switch (type) {
    case ADD_PERSON_SUCCESS:
      return state.set(
        'list',
        payload.person
      );
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

export function addPerson(person) {
  return dispatch => {
    dispatch({
      type: ADD_PERSON_SUCCESS,
      payload: { person },
    });
    dispatch(reset('add-person'))
  }
}

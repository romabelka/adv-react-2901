import {appName} from '../config'

/**
 * Constants
 * */
export const moduleName = 'list-users';
const prefix = `${appName}/${moduleName}`;

export const ADD_USER = `${prefix}/ADD_USER`;

/**
 * Reducer
 * */

export default function reducer(state = [], action) {
  const {type, payload} = action;

  switch (type) {
    case ADD_USER:
      return [...state, payload];

    default:
      return state;
  }
}

/**
 * Selectors
 * */

/**
 * Action Creators
 * */

export function addUser(user) {
  return dispatch => {
    dispatch({
      type: ADD_USER,
      payload: user
    });
  }
}
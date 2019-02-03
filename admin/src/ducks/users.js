import { Record } from "immutable";
import _ from "lodash";
import { appName } from "../config";
import { ReducerRecord, SIGN_UP_START, SIGN_UP_SUCCESS } from "./auth";
import firebase from "firebase";

/**
 * Constants
 **/
export const moduleName = "users";
const prefix = `${appName}/${moduleName}`;

export const CREATE_USER_SUCCESS = `${prefix}/ADD_USER_SUCCESS`;

/**
 * Reducer
 **/

const ReducerRecord = Record({
  items: new OrderedMap({})
});

const UserRecord = Record({
  id: null,
  email: null,
  firstName: null,
  lastName: null
});

export default function reducer(state = new ReducerRecord(), action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_USER_SUCCESS:
      return state.setIn(["items", payload.id], new PersonRecord(payload));
    default:
      return state;
  }
}

export function createUser({ email, firstName, lastName }) {
  return async dispatch => {
    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: {
        id: _.uniqueId(),
        email,
        firstName,
        lastName
      }
    });
  };
}
